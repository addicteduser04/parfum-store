export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-playfair font-bold mb-8">
        Politique de Confidentialité
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Dernière mise à jour: 13 février 2024
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-4">
          Bienvenue sur Parfum House. Nous nous engageons à protéger votre vie privée et à garantir 
          la sécurité de vos informations personnelles. Cette politique de confidentialité explique 
          comment nous collectons, utilisons et protégeons vos données lorsque vous visitez notre site web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Données Collectées</h2>
        <p className="text-gray-600 mb-4">
          Nous pouvons collecter les types d'informations suivantes:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Informations personnelles (nom, email, numéro de téléphone)</li>
          <li>Informations de navigation (adresse IP, type de navigateur)</li>
          <li>Préférences et interactions avec notre site</li>
          <li>Données de communication (messages via formulaire de contact)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Utilisation des Données</h2>
        <p className="text-gray-600 mb-4">
          Vos données personnelles sont utilisées pour:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Répondre à vos demandes et questions</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
            <li>Vous informer sur nos nouveaux produits et offres</li>
            <li>Assurer la sécurité et la prévention des fraudes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Partage des Données</h2>
        <p className="text-gray-600 mb-4">
          Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
          Nous ne partageons vos données que dans les circonstances suivantes:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Avec votre consentement explicite</li>
            <li>Pour se conformer aux obligations légales</li>
            <li>Pour protéger nos droits et notre sécurité</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sécurité des Données</h2>
        <p className="text-gray-600 mb-4">
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations 
          personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
        <p className="text-gray-600 mb-4">
          Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez 
          choisir de désactiver les cookies dans les paramètres de votre navigateur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Vos Droits</h2>
        <p className="text-gray-600 mb-4">
          Conformément à la législation en vigueur, vous avez le droit de:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Accéder à vos données personnelles</li>
            <li>Rectifier vos données inexactes</li>
            <li>Supprimer vos données personnelles</li>
            <li>Vous opposer au traitement de vos données</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
        <p className="text-gray-600 mb-4">
          Pour toute question concernant cette politique de confidentialité, veuillez nous contacter:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">
            Email: contact@parfumhouse.ma<br />
            Téléphone: +212 522 123 456<br />
            Adresse: 123 Avenue Mohammed V, Casablanca 20100
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications</h2>
        <p className="text-gray-600 mb-4">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
          Les modifications entreront en vigueur dès leur publication sur notre site.
        </p>
      </div>
    </div>
  );
}
