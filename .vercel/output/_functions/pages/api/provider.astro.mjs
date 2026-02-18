export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const body = new URLSearchParams({
      from_name: data.get("from_name") || "",
      phone: data.get("phone") || "",
      city: data.get("city") || "",
      district: data.get("district") || "",
      message: data.get("message") || ""
    });
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzLT9Ucsx0nOSXgSoFoX8THMdtmSQsy8k7-wrm-N5q25W6UgdIkxhlK4tUEtxVSnoI/exec";
    const response = await fetch(scriptUrl, { method: "POST", body });
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Script error" }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
