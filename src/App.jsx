function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, background: '#f0f4ff' }}>
      
      {/* NAVBAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#0f172a', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 15px rgba(0,0,0,0.2)', flexWrap: 'wrap', gap: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '22px', color: 'white' }}>ADIKA <span style={{ color: '#60a5fa' }}>Amèvi Dodji </span></h2>
        <div style={{ display: 'flex', gap: '20px', fontWeight: '600', fontSize: '14px', flexWrap: 'wrap' }}>
          <a href="#accueil" style={{ color: 'white', textDecoration: 'none' }}>Accueil</a>
          <a href="#competences" style={{ color: 'white', textDecoration: 'none' }}>Compétences</a>
          <a href="#projets" style={{ color: 'white', textDecoration: 'none' }}>Projets</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
        <a href="https://wa.me/22897528950" style={{ background: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', fontSize: '13px', fontWeight: '700' }}>Me Contacter</a>
      </div>

      {/* HERO - AVEC PHOTO */}
      <div id="accueil" style={{ textAlign: 'center', padding: '60px 20px 70px', background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #06b6d4 100%)', color: 'white' }}>
         <img src="/moi.jpg" alt="ADIKA Amèvi Dodji" style={{ width: '320px', maxWidth: '90%', height: 'auto', borderRadius: '20px', border: '4px solid white', marginBottom: '20px' }} />
        <div style={{ marginTop: '20px' }}>
          <span style={{ background: 'white', color: '#1e40af', padding: '9px 20px', borderRadius: '25px', fontSize: '13px', fontWeight: '800' }}>DISPONIBLE POUR DES PROJETS</span>
        </div>
        <h1 style={{ fontSize: '52px', margin: '25px 0 10px', lineHeight: '1.1', color: 'white' }}>ADIKA Amèvi Dodji</h1>
        <h2 style={{ fontSize: '26px', color: '#bfdbfe', margin: 0, fontWeight: '600' }}>Développeur Web, Mobile & IA</h2>
        <p style={{ maxWidth: '700px', margin: '20px auto', color: '#e0e7ff', fontSize: '18px', lineHeight: '1.7', padding: '0 10px' }}>
          Je transforme vos idées en sites web et applications mobiles modernes, rapides et intelligentes.
        </p>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/22897528950" style={{ background: 'white', color: '#1e40af', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: '800', display: 'inline-block' }}>Me Contacter sur WhatsApp</a>
          <a href="#projets" style={{ background: 'transparent', color: 'white', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: '700', border: '2px solid white', display: 'inline-block' }}>Voir mes Projets</a>
        </div>
      </div>

      {/* COMPETENCES */}
      <div id="competences" style={{ padding: '60px 20px', textAlign: 'center', background: '#dbeafe' }}>
        <h2 style={{ fontSize: '34px', color: '#0f172a', margin: 0 }}>Mes Compétences</h2>
        <p style={{ color: '#475569', fontSize: '16px' }}>Ce que je sais faire pour vous</p>
        <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '35px' }}>
          <div style={{ background: 'white', borderTop: '6px solid #2563eb', padding: '30px 25px', borderRadius: '18px', width: '260px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}><h3 style={{ color: '#2563eb', fontSize: '22px' }}>Web</h3><p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>React, HTML, CSS, JavaScript<br/>Sites modernes et rapides</p></div>
          <div style={{ background: 'white', borderTop: '6px solid #16a34a', padding: '30px 25px', borderRadius: '18px', width: '260px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}><h3 style={{ color: '#16a34a', fontSize: '22px' }}>Mobile</h3><p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>Applications mobiles modernes<br/>Android & iOS</p></div>
          <div style={{ background: 'white', borderTop: '6px solid #9333ea', padding: '30px 25px', borderRadius: '18px', width: '260px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}><h3 style={{ color: '#9333ea', fontSize: '22px' }}>IA</h3><p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>Solutions intelligentes avec IA<br/>Automatisation</p></div>
        </div>
      </div>

      {/* PROJETS */}
      <div id="projets" style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h2 style={{ fontSize: '34px', color: '#0f172a', margin: 0 }}>Mes Projets</h2>
        <p style={{ color: '#475569', fontSize: '16px' }}>Quelques réalisations</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '35px' }}>
          <div style={{ background: '#faf5ff', padding: '30px 25px', borderRadius: '20px', width: '280px', border: '2px solid #c084fc', boxShadow: '0 10px 25px rgba(192,132,252,0.25)' }}><h3 style={{ color: '#7e22ce', fontSize: '21px' }}>Rastizy_ia</h3><p style={{ color: '#475569', fontSize: '14px' }}>Projet intelligent avec IA</p><span style={{ background: '#a855f7', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>IA • WEB</span></div>
          <div style={{ background: '#eff6ff', padding: '30px 25px', borderRadius: '20px', width: '280px', border: '2px solid #60a5fa', boxShadow: '0 10px 25px rgba(96,165,250,0.25)' }}><h3 style={{ color: '#1d4ed8', fontSize: '21px' }}>Cours campus</h3><p style={{ color: '#475569', fontSize: '14px' }}>Plateforme de cours pour étudiants</p><span style={{ background: '#2563eb', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>EDUCATION • WEB</span></div>
          <div style={{ background: '#fff7ed', padding: '30px 25px', borderRadius: '20px', width: '280px', border: '2px solid #fb923c', boxShadow: '0 10px 25px rgba(251,146,60,0.25)' }}><h3 style={{ color: '#ea580c', fontSize: '21px' }}>Projet URYA</h3><p style={{ color: '#475569', fontSize: '14px' }}>Projet web moderne</p><span style={{ background: '#f97316', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>WEB • DESIGN</span></div>
          <div style={{ background: '#f0fdf4', padding: '30px 25px', borderRadius: '20px', width: '280px', border: '2px solid #4ade80', boxShadow: '0 10px 25px rgba(74,222,128,0.25)' }}><h3 style={{ color: '#16a34a', fontSize: '21px' }}>MatchsLive</h3><p style={{ color: '#475569', fontSize: '14px' }}>Suivez les matchs en direct</p><span style={{ background: '#22c55e', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>SPORT • LIVE</span></div>
          <div style={{ background: '#fdf2f8', padding: '30px 25px', borderRadius: '20px', width: '280px', border: '2px solid #f472b6', boxShadow: '0 10px 25px rgba(244,114,182,0.25)' }}><h3 style={{ color: '#db2777', fontSize: '21px' }}>adika studio</h3><p style={{ color: '#475569', fontSize: '14px' }}>Studio créatif & digital</p><span style={{ background: '#ec4899', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>CREATIF • STUDIO</span></div>
          <div style={{ background: '#fefce8', padding: '30px 25px', borderRadius: '20px', width: '280px', border: '2px solid #facc15', boxShadow: '0 10px 25px rgba(250,204,21,0.3)' }}><h3 style={{ color: '#ca8a04', fontSize: '21px' }}>Saveurs du Togo</h3><p style={{ color: '#475569', fontSize: '14px' }}>Découvrez la cuisine togolaise</p><span style={{ background: '#eab308', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>CUISINE • TOGO</span></div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: '70px 20px', textAlign: 'center', background: '#0f172a', color: 'white' }}>
        <h2 style={{ fontSize: '34px', margin: 0, color: 'white' }}>Contactez-moi</h2>
        <p style={{ color: '#cbd5e1', fontSize: '16px' }}>Un projet en tête ? Parlons-en !</p>
        <a href="https://wa.me/22897528950" style={{ background: '#25D366', color: 'white', padding: '16px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: '800', display: 'inline-block', marginTop: '25px', fontSize: '16px', boxShadow: '0 10px 25px rgba(37,211,102,0.3)' }}>WhatsApp : 228 97 52 89 50</a>
        <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '45px' }}>© 2026 ADIKA Amèvi Dodji - Tous droits réservés</p>
      </div>
    </div>
  )
}

export default App