import cavys from '../datafile/cavys.js';
import dogs from '../datafile/dogs';
import ducks from '../datafile/ducks';
import snakes from '../datafile/snakes';
import cats from '../datafile/cats';
import turtles from '../datafile/turtles';
import sheeps from '../datafile/sheeps';
import geeses from '../datafile/geeses';
import turkeys from '../datafile/turkeys';
import pigeons from '../datafile/pigeons';
import pigs from '../datafile/pigs';
import horses from '../datafile/horses';
import foxs from '../datafile/foxs';
import rabbits from '../datafile/rabbits';
import ponys from '../datafile/ponys';
import goats from '../datafile/goats';
import chickens from '../datafile/chickens';
import cattles from '../datafile/cattles';
import donkeys from '../datafile/donkeys';
//gradi
const databaseList = [
    {
        title: 'Cats',
        list: cats,
        breed: true,
        img: 'cat', 
        type: 'breeds',
        description: [
             'A baby cat is called kitten.',
             'The cat sound is called meow.',
             'Cats sleep 70% of their lives.',
             'A group of cats is called a clowder, clutter, litter (a group of young born to one female) , or kindle (a group of kittens).',
             'Each side of a cat\'s face has about 12 whiskers.',
             'A female cat is also known to be called a "queen" or a "molly."',
            'Cats\' rough tongues enable them to clean themselves efficiently and to lick clean an animal bone.',
             'There are 88 million cats compared to 74 million dogs.'
        ]
    },
    {
        title: 'cattles',
        list: cattles,
        breed: false,
        img: 'cattle',
        type: 'breeds',
        description: [
            'A baby cattle is call calf or dogie (a motherless calf).',
            'A male cattle is call bull or steer.',
            'Cattle sound is call moo.',
            'Cattle are members of the ox family.',
            'A cow\'s udder has four sections to hold her milk.',
            'Female cattle are know as cow while a young female before she has had a calf of her own and is under three years of age is called a heifer.',
            'Cattle have one stomach but it is divided into four compartments, the rumen, reticulum, omasum, and abomasum, the rumen being the largest compartment, this arrangement helps cattle to more efficiently digest grains and grasses. ', 
        ]
    },
    {
        title: 'Cavys',
        list: cavys,
        breed: true,
        img: 'cavy',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'chickens',
        list: chickens,
        breed: false,
        img: 'chicken',
        type: 'breeds',
        description: [
            'A female chicken is called hen and a male chicken is called rooster. ',
            'A baby chicken is called chick, pullet (young hen or young female) or cockrell (young rooster or young male). ',
            'A group of chickens is called a flock, brood (of hens), clutch (of chicks), or peep (of chicks). ',
            'The hen sound is called cluck while a rooster cockadoodledoo. ',
            'There are more chickens in the world than any other bird. ',
        ]
    },
    {
        title: 'Dogs',
        list: dogs, 
        breed: true,
        img: 'dog',
        type: 'breeds',
        description: [
            'A baby dog is called pup or puppy. ',
            'Puppies are born blind and deaf. ',
            'A female dog is called bitch. ',
            'The dog sound is called bark but it can also yelp, whine, howl and growl. ',
            'A group of dogs is called a kennel, clutter, litter(a group of young born to one female), or pack(wild).',
            'Dogs are known as man\'s best friend.',
            'Dogs are said to be direct descendant from the gray wolf sharing 99.9 % of their DNA.',
            'Dog have superior hearing than humans, capable of hearing sounds at four times the distance.',
            'Domestic dogs are omnivores, they feed on a variety of foods including grains, vegetables and meats.',
        ]
    },
    {
        title: 'donkeys',
        list: donkeys,
        breed: false,
        img: 'donkey',
        type: 'breeds', 
        description: [
            'A baby donkey is called colt or foal. ',
            'The donkey sound is called hee - haw. ',
            'A group of donkey is called a drove or herd. ',
            'China has more donkeys than any other country in the world. ',
            'Ass is the correct term for the animal known as the donkey, burro, or jackstock.' ,
            'A female donkey is called jennet or jenny and a male donkey is called jack or jackass.',
            'Donkeys come from Africa and the Middle East, where they were tamed more than 5, 000 years ago. ',
            'A mule is a cross between a male donkey and a female horse.Mules are very strong, but bigger than a donkey. ',
        ]
    },
    {
        title: 'Ducks',
        list: ducks,
        breed: true,
        img: 'duck',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Foxes',
        list: foxs,
        breed: true,
        img: 'fox',
        type: 'species',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'goats',
        list: goats,
        breed: false,
        img: 'goat',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Goose',
        list: geeses,
        breed: false,
        img: 'goose',
        type: 'species',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Horses',
        list: horses,
        breed: true,
        img: 'horse',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Pigeons',
        list: pigeons,
        breed: true,
        img: 'pigeon',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Pigs',
        list: pigs,
        breed: true,
        img: 'pig',
        type: 'breeds',
        description: [
            'The pig sound is called oink. ',
            'A baby pig is called piglet, shoat or farrow. ',
            'A group of pigs is called a drift, drove or team. ',
            'Pigs are considered smarter than a 3 year old child. ',
            'Pigs are believed to have been domesticated from wild boar as early as 9000 years ago. ',
            'Like humans, pigs are omnivores, meaning they eat both plants and other animals. ',
            'A female pig is called gilt(no piglets or babies) or sow(with piglets or babies) and a male pig is called boar or hog. ',
        ]
    },
    {
        title: 'ponies',
        list: ponys,
        breed: false,
        img: 'pony',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'rabbits',
        list: rabbits,
        breed: false,
        img: 'rabbit',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Sheeps',
        list: sheeps,
        breed: true,
        img: 'sheep',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Snakes',
        list: snakes,
        breed: true,
        img: 'snake',
        type: 'species',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Turkeys',
        list: turkeys,
        breed: true,
        img: 'turkey',
        type: 'breeds',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
    {
        title: 'Turtles',
        list: turtles,
        breed: true,
        img: 'turtle',
        type: 'species',
        description: [
            'A baby cat is called kitten.general knowledge',
            'The cat sound is called meow.general knowledge',
            'Cats sleep 70% of their lives.buzzfeed.com',
            'A group of cats is called a clowder, clutter, litter(a group of young born to one female) , or kindle(a group of kittens) .buzzfeed.com',
            'Each side of a cat\'s face has about 12 whiskers.animalplanet.com',
            'there are 88 million cats compared to 74 million dogs.factslides.com'
        ]
    },
]; 

// the list varable concatinate all our arrays into one arrays.
const list = cavys.concat(ducks, dogs, snakes, turtles, cats, turkeys, pigeons, pigs, horses, foxs, geeses, sheeps, rabbits, ponys, goats, chickens, cattles, donkeys);

let total = list.length.toLocaleString();

export { databaseList, total, list };
