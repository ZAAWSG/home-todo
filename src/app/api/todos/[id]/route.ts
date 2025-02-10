import { supabase } from "../../../../lib/supabaseClient";
import { NextRequest } from "next/server";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
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


export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { error } = await supabase
    .from("todos")
    .update({ status: false })
    .eq("id", params.id);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true }));
}
