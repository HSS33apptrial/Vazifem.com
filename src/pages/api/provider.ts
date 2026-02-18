import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const body = new URLSearchParams({
      from_name: (data.get('from_name') as string) || '',
      phone:     (data.get('phone')     as string) || '',
      city:      (data.get('city')      as string) || '',
      district:  (data.get('district')  as string) || '',
      message:   (data.get('message')   as string) || '',
    });

    const scriptUrl = import.meta.env.GOOGLE_SCRIPT_URL;
    const response = await fetch(scriptUrl, { method: 'POST', body });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Script error' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
