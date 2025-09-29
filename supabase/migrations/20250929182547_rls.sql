-- Supabase Row Level Security Policies

-- -----------------------------------------------------------------------------
-- Helper Functions
-- -----------------------------------------------------------------------------

-- Helper function to get the role of the currently authenticated user.
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_role TEXT;
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN NULL;
  END IF;
  SELECT "role"::TEXT INTO user_role FROM "Profile" WHERE id = auth.uid();
  RETURN user_role;
END;
$$;

-- Helper function to check if the currently authenticated user is an admin.
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;
  RETURN (SELECT get_my_role()) = 'ADMIN';
END;
$$;


-- -----------------------------------------------------------------------------
-- Table Policies
-- -----------------------------------------------------------------------------

-- Onboarding table: sensitive data, only service_role access
ALTER TABLE "Onboarding" ENABLE ROW LEVEL SECURITY;

-- Profile table
ALTER TABLE "Profile" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage all profiles" 
  ON "Profile" 
  FOR ALL USING (is_admin()) 
  WITH CHECK (is_admin());
CREATE POLICY "Users can view their own profile" 
  ON "Profile" 
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" 
  ON "Profile" 
  FOR UPDATE USING (auth.uid() = id) 
  WITH CHECK (auth.uid() = id);

-- Course table
ALTER TABLE "Course" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published courses" 
  ON "Course" 
  FOR SELECT USING (published = 'PUBLISHED');
CREATE POLICY "Admins can manage all courses" 
  ON "Course" 
  FOR ALL USING (is_admin()) 
  WITH CHECK (is_admin());

-- Instructor table
ALTER TABLE "Instructor" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage instructors" 
  ON "Instructor" 
  FOR ALL USING (is_admin()) 
  WITH CHECK (is_admin());
CREATE POLICY "Anyone can view instructors of published courses" 
  ON "Instructor" 
  FOR SELECT USING (
    id IN (
      SELECT "instructorId" 
      FROM "CourseInstructor" ci 
      JOIN "Course" c ON ci."courseId" = c.id 
      WHERE c.published = 'PUBLISHED'
    )
  );

-- CourseInstructor table
ALTER TABLE "CourseInstructor" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage course instructors" 
  ON "CourseInstructor" 
  FOR ALL USING (is_admin()) 
  WITH CHECK (is_admin());
CREATE POLICY "Anyone can view instructors for published courses" 
  ON "CourseInstructor" 
  FOR SELECT USING (
    "courseId" IN (
      SELECT id 
      FROM "Course" 
      WHERE published = 'PUBLISHED'
    )
  );

-- Content table
ALTER TABLE "Content" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage all content" 
  ON "Content" 
  FOR ALL USING (is_admin()) 
  WITH CHECK (is_admin());
CREATE POLICY "Users can view accessible content" 
  ON "Content" 
  FOR SELECT USING (
  (
    hidden = false AND 
    "isFree" = true AND 
    id IN (
      SELECT "contentId" 
      FROM "CourseContent" cc 
      JOIN "Course" c ON c.id = cc."courseId" 
      WHERE c.published = 'PUBLISHED'
    )
  ) 
  OR 
  (
    id IN (
      SELECT "contentId" 
      FROM "CourseContent" 
      WHERE "courseId" IN (
        SELECT "courseId" 
        FROM "UserCoursePurchases" 
        WHERE "userId" = auth.uid()
      )
    )
  ) 
  OR
  (
    id IN (
      SELECT "contentId" 
      FROM "UserContentPurchases" 
      WHERE "userId" = auth.uid()
    )
  )
);

-- CourseContent table
ALTER TABLE "CourseContent" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage course content links" 
  ON "CourseContent" 
  FOR ALL USING (is_admin()) 
  WITH CHECK (is_admin());
CREATE POLICY "Users can view links for accessible courses" 
  ON "CourseContent" FOR SELECT USING (
    (
      "courseId" IN (
        SELECT id 
        FROM "Course" 
        WHERE published = 'PUBLISHED'
      )
    ) 
    OR
    (
      "courseId" IN (
        SELECT "courseId" 
        FROM "UserCoursePurchases" 
        WHERE "userId" = auth.uid()
      )
    )
  );

-- VideoMetadata table
ALTER TABLE "VideoMetadata" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage video metadata" 
  ON "VideoMetadata" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view metadata for accessible content" 
  ON "VideoMetadata" 
  FOR SELECT 
    USING (
      "contentId" IN (
        SELECT id 
        FROM "Content"
      )
    );

-- Favourites table
ALTER TABLE "Favourites" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own favourites" 
  ON "Favourites" 
  FOR ALL 
    USING (auth.uid() = "userId") 
    WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Admins can view all favourites" 
  ON "Favourites" 
  FOR SELECT 
    USING (is_admin());

-- Bookmarks table
ALTER TABLE "Bookmarks" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own bookmarks" 
  ON "Bookmarks" 
  FOR ALL 
    USING (auth.uid() = "userId") 
    WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Admins can view all bookmarks" 
  ON "Bookmarks" 
  FOR SELECT 
    USING (is_admin());

-- Discount table
ALTER TABLE "Discount" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage discounts" 
  ON "Discount" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view applicable discounts" 
  ON "Discount" 
  FOR SELECT USING (
    now() BETWEEN "startAt" AND "endAt" AND
    get_my_role() = ANY(roles::text[])
);

-- DiscountUsage table
ALTER TABLE "DiscountUsage" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage discount usage" 
  ON "DiscountUsage" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view their own discount usage" 
  ON "DiscountUsage" 
  FOR SELECT 
    USING (auth.uid() = "userId");

-- Transaction table
ALTER TABLE "Transaction" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage transactions" 
  ON "Transaction" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view their own transactions" 
  ON "Transaction" 
  FOR SELECT 
    USING (auth.uid() = "userId");

-- UserCoursePurchases table
ALTER TABLE "UserCoursePurchases" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage course purchases" 
  ON "UserCoursePurchases" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view their own course purchases" 
  ON "UserCoursePurchases" 
  FOR SELECT 
    USING (auth.uid() = "userId");

-- UserContentPurchases table
ALTER TABLE "UserContentPurchases" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage content purchases" 
  ON "UserContentPurchases" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view their own content purchases" 
  ON "UserContentPurchases" 
  FOR SELECT 
    USING (auth.uid() = "userId");

-- VideoProgress table
ALTER TABLE "VideoProgress" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own video progress" 
  ON "VideoProgress" 
  FOR ALL 
    USING (auth.uid() = "userId") 
    WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Admins can view all video progress" 
  ON "VideoProgress" 
  FOR SELECT 
    USING (is_admin());

-- Certificate table
ALTER TABLE "Certificate" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage certificates" 
  ON "Certificate" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
CREATE POLICY "Users can view their own certificates" 
  ON "Certificate" 
  FOR SELECT 
    USING (auth.uid() = "userId");

-- Review table
ALTER TABLE "Review" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view reviews" 
  ON "Review" 
  FOR SELECT 
    USING (true);
CREATE POLICY "Users can manage their own reviews" 
  ON "Review" 
  FOR ALL 
    USING (auth.uid() = "userId") 
    WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Admins can manage all reviews" 
  ON "Review" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());

-- SupportTicket table
ALTER TABLE "SupportTicket" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own support tickets" 
  ON "SupportTicket" 
  FOR ALL 
    USING (auth.uid() = "userId") 
    WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Admins can manage all support tickets" 
  ON "SupportTicket" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());

-- RefundRequest table
ALTER TABLE "RefundRequest" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own refund requests" 
  ON "RefundRequest" 
  FOR ALL 
    USING (auth.uid() = "userId") 
    WITH CHECK (auth.uid() = "userId");
CREATE POLICY "Admins can manage all refund requests" 
  ON "RefundRequest" 
  FOR ALL 
    USING (is_admin()) 
    WITH CHECK (is_admin());
