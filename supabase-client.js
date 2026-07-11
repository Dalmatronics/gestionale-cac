// Configurazione Supabase condivisa da tutte le pagine.
// Se cambi progetto o rigeneri le key, aggiorna solo qui.

const SUPABASE_URL = "https://sjzdbhbkhchsioftlwjp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__k8biF2fVay0v1qaL8W2jA_tnwM1lBo";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
