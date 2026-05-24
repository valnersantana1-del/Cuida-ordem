import { createClient } from '@supabase/supabase-js';

// A Vercel injeta essas variáveis automaticamente graças à integração que você fez
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // Isso garante que apenas envios de dados (POST) sejam aceitos
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { subscription } = req.body;

    // Salva a assinatura na tabela que você criou no Supabase
    const { data, error } = await supabase
      .from('push_subscriptions')
      .insert([{ subscription }]);

    if (error) throw error;

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}