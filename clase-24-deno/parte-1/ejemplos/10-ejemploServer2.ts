import { serve } from "https://deno.land/std@0.106.0/http/mod.ts";

const port = Number(Deno.env.get("PORT")) || 8080;

const server = serve({ port });

(async () => {
  for await (const req of server) {
    req.respond({
      status: 200,
      headers: new Headers({ 'content-type': 'text/html' }),
      body: '<h2>Hola seguidores de Coderhouse!!!</h2>'
    });
  }
})()

console.log(`conectado al puerto ${port}!`);
