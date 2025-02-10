import { supabase } from "@/lib/supabaseClient";

export async function PUT(req: Request, { params }: { params: { id: number } }) {
    const { status } = await req.json();
    const { error } = await supabase
        .from("todos")
        .update({ status })
        .eq("id", params.id);

    if (error) {
        return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }));
}


export async function POST({ params }: { params: { id: number } }) {
  const { error } = await supabase
    .from("todos")
    .update({ status: false })
    .eq("id", params.id);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true }));
}
