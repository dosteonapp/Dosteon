-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert messages
CREATE POLICY "Allow anonymous inserts" ON public.contact_messages
    FOR INSERT 
    TO anon
    WITH CHECK (true);

-- Deny select access to anonymous users (optional, good for security)
CREATE POLICY "Deny anonymous selects" ON public.contact_messages
    FOR SELECT
    TO anon
    USING (false);
