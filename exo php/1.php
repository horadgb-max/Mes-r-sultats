// Approche objet : les donnees et les fonctions sont regroupees
class Utilisateur
{
    public string $nom;
    public int $age;
    public string $email;

    public function afficher(): void
    {
        echo "Nom : $this->nom, Age : $this->age, Email : $this->email\n";
    }
}

$alice = new Utilisateur();  // On cree un objet a partir de la classe
$alice->nom = "Alice";       // On definit ses proprietes
$alice->age = 25;
$alice->email = "alice@exemple.fr";
$alice->afficher();          // On appelle sa methode