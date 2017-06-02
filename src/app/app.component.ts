import { Component } from '@angular/core';

export class Hero {
    id: number;
    color: string;
    image: string;
    heroName: string;
    realName: string;
    hometown: string;
    superpower: string;
    bio: string;
}

const HEROES: Hero[] = [
    {
        id: 1,
        color: '#F44336',
        image: '../assets/heroes/the_flash.jpg',
        heroName: 'The Flash',
        realName: 'Barry Allen',
        hometown: 'Central City',
        superpower: 'Super Speed',
        bio: 'Barry Allen is a forensic scientist with a reputation for being very slow, ' +
        'and frequently late, which frustrates his fiancee, Iris West, as the result of being ' +
        'absent-minded and his devotion to crime-solving. One night, as he is working late, ' +
        'a lightning bolt shatters a case full of chemicals and spills all over Barry. ' +
        'As a result, Allen finds that he can run extremely fast and has matching ' +
        'reflexes and senses.'
    },
    {
        id: 2,
        color: '#2E7D32',
        image: '../assets/heroes/green_lantern.jpg',
        heroName: 'Green Lantern',
        realName: 'Hal Jordan',
        hometown: 'Coast City',
        superpower: 'Power ring',
        bio: 'Hal Jordan is a member and occasionally leader of an intergalactic police ' +
        'force called the Green Lantern Corps, as well as a founding member of the Justice League. ' +
        'He fights evil across the Universe with a ring that grants him a variety of superpowers.'
    },
    {
        id: 3,
        color: '#263238',
        image: '../assets/heroes/batman.jpg',
        heroName: 'Batman',
        realName: 'Bruce Wayne',
        hometown: 'Gothan City',
        superpower: 'Genius-level intelect',
        bio: 'At age 14, Bruce embarked on a journey that took him to every continent as he ' +
        'sought to learn all the skills he would need to keep his vow. He studied criminology, ' +
        'forensics, and criminal psychology, and learned from manhunters and martial artists, ' +
        'mastering every fighting style. In time, Bruce forged himself into a living weapon to ' +
        'wage war on crime and injustice. On his return to Gotham, Bruce stalked street thugs as ' +
        'a plainclothes vigilante. Beaten by the very people he intended to protect, he barely ' +
        'survived his first night out. As he sat bleeding in his study at Wayne Manor Bruce knew ' +
        'that he had to first strike fear in the hearts of his foes. Just then, a bat crashed through ' +
        'the study window, giving Bruce the inspiration he needed.'
    },
    {
        id: 4,
        color: '#2196F3',
        image: '../assets/heroes/superman.jpg',
        heroName: 'Superman',
        realName: 'Clark Kent/Kal El',
        hometown: 'Metropolis',
        superpower: 'Superhuman Strength and speed',
        bio: 'Kal-El was born to the highly decorated scientific genius Jor-El and his wife Lara, ' +
        'a former astronaut on their home planet of Krypton. Like all Kryptonians, Kal-El had no ' +
        'superhuman powers or abilities on Krypton, but was, like his father, a very astute and ' +
        'intelligent boy who learned to speak and read in his native language by the time he was ' +
        'three years old.'
    },
    {
        id: 5,
        color: '#81D4FA',
        image: '../assets/heroes/aquaman.jpg',
        heroName: 'Aquaman',
        realName: 'Arthur Curry',
        hometown: 'Atlantis',
        superpower: 'Superhuman strength, stamina, endurance and reflexes',
        bio: 'The story must start with my father, a famous undersea explorer — if I spoke his name, ' +
        'you would recognize it. My mother died when I was a baby, and he turned to his work of ' +
        'solving the ocean secrets. His greatest discovery was an ancient city, in the depths where ' +
        'no other diver had ever penetrated. My father believed it was the lost kingdom of Atlantis. ' +
        'He made himself a water-tight home in one of the palaces and lived there, studying the ' +
        'records and devices of the race marvelous wisdom. From the books and records, he learned ' +
        'ways of teaching me to live under the ocean, drawing oxygen from the water and using all ' +
        'the power of the sea to make me wonderfully strong and swift. By training and a hundred ' +
        'scientific secrets, I became what you see — a human being who lives and thrives under ' +
        'the water.'
    },
    {
        id: 6,
        color: '#FFEB3B',
        image: '../assets/heroes/wonder_woman.jpeg',
        heroName: 'Wonder Woman',
        realName: 'Diana Prince',
        hometown: 'Unknown',
        superpower: 'Flight and superhuman strength',
        bio: 'Diana is the daughter of Queen Hippolyta, the first child born on Paradise Island in ' +
        'the three thousand year history that the immortal Amazons lived there. The Amazons had been ' +
        'created around 1200 B.C. when the Greek goddesses drew forth the souls of all women who had ' +
        'been murdered by men and placed them on the island. One soul was held back from creation, ' +
        'the one that would be born as Diana. That soul originally belonged to the unborn daughter ' +
        'of the first woman murdered by a man (whom Hippolyta was the reincarnation of).'
    },
    {
        id: 7,
        color: '#1B5E20',
        image: '../assets/heroes/arrow.png',
        heroName: 'Green Arrow',
        realName: 'Oliver Queen',
        hometown: 'Star City',
        superpower: 'Acute accuracy and dexterity',
        bio: 'Oliver Jonas "Ollie" Queen (born May 16, 1985) is a former billionaire ' +
        'playboy-turned-vigilante archer and the current Mayor of Star City. He was also the previous ' +
        'owner of the night club Verdant (which he used as a cover for his operations) and CEO of ' +
        'Queen Consolidated. After being presumed lost at sea for 5 years, Oliver returned home with' +
        ' a mission to rid Starling City of crime and corruption, becoming the hooded vigilante known ' +
        'as The Hood. Armed with a bow and arrow, The Hood was willing to use lethal force, but after' +
        ' his best friend Tommy Merlyn was killed in the Undertaking, Oliver vowed never to kill again ' +
        'unless absolutely necessary, renaming himself The Arrow'
    },
    {
        id: 8,
        color: '#FF5722',
        image: '../assets/heroes/robin.jpg',
        heroName: 'Robin',
        realName: 'Jason Todd',
        hometown: 'Gothan City',
        superpower: 'Highly skilled military tactician',
        bio: 'Jason Todd was the son of circus acrobats murdered by a criminal (this time the Batman ' +
        'adversary Killer Croc), and then adopted by Bruce Wayne. In this incarnation, he was ' +
        'originally red-haired and unfailingly cheerful, and wore his circus costume to fight crime ' +
        'until Dick Grayson presented him with a Robin suit of his own. At that point, he dyed his ' +
        'hair black.'
    },
    {
        id: 9,
        color: '#00E676',
        image: '../assets/heroes/mars.jpg',
        heroName: 'Martian Manhunter',
        realName: "J'onn J'onzz",
        hometown: 'Mars',
        superpower: 'Flight and Intangibility',
        bio: "Martian Manhunter, also known as J'onn J'onzz and John Jones, is a superhero from the " +
        "planet Mars and the last surviving member of his race. A martian holocaust killed his wife " +
        "and daughter, nearly driving him mad, until he was brought to Earth in an accident caused by " +
        "scientist Saul Erdel. His natural abilities include super-strength, super-speed, " +
        "invulnerability, flight, shape-shifting, intangibility and telepathy. He has been a member " +
        "of almost every incarnation of the Justice League of America. Although he holds great " +
        "reverence for his homeworld, he has come to greatly respect his adopted world as well and " +
        "protects it as his home."
    },
    {
        id: 10,
        color: '#795548',
        image: '../assets/heroes/hawk_woman.jpg',
        heroName: 'Hawkwoman',
        realName: 'Kendra Saunders',
        hometown: 'Unknown',
        superpower: 'Belt/harness containing of Nth metal that defies gravity',
        bio: "Hawkwoman's most distinguishing features are the giant wings on her back. She wears " +
        "a costume matching colors with Hawkman's, but lacking most armor. She also dons a golden " +
        "breastplate, leaving the top of her torso bare, and a black skirt with dark red plating. " +
        "Her arms were wrapped in black and dark red cloth, with extra padding around the shoulders." +
        " She also wears knee-high greaves. Her helmet is less elaborate than Hawkman's, featuring " +
        "only two brown wings facing outward. It allows her red hair to flow out the back."
    },
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'My heroes list';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}




