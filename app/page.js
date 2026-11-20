import produits from './produits.json';

export const dynamic = 'force-dynamic'; // rendu serveur à chaque requête : l'heure prouve que Next.js tourne

const euros = (n) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

export default function Page() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 860, margin: '40px auto', padding: '0 16px' }}>
      <h1>Atelier Lumen — boutique de démo</h1>
      <p style={{ color: '#666' }}>Site de test Next.js pour ForYouHost · v1 · rendu le {new Date().toLocaleString('fr-FR')}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        {produits.map((p) => (
          <article key={p.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
            <h2 style={{ fontSize: 18, margin: '0 0 8px' }}>{p.nom}</h2>
            <p style={{ margin: '0 0 8px', color: '#555' }}>{p.description}</p>
            <strong>{euros(p.prix)}</strong> · {p.stock > 0 ? `${p.stock} en stock` : 'épuisé'}
          </article>
        ))}
      </div>
    </main>
  );
}
