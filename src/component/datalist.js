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

const databaseList = [
    {
        title: 'Cats',
        list: cats,
        breed: true,
        img: 'cat',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'cattles',
        list: cattles,
        breed: false,
        img: 'cattle',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Cavys',
        list: cavys,
        breed: true,
        img: 'cavy',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'chickens',
        list: chickens,
        breed: false,
        img: 'chicken',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Dogs',
        list: dogs, 
        breed: true,
        img: 'dog',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'donkeys',
        list: donkeys,
        breed: false,
        img: 'donkey',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Ducks',
        list: ducks,
        breed: true,
        img: 'duck',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Foxes',
        list: foxs,
        breed: true,
        img: 'fox',
        type: 'species',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'goats',
        list: goats,
        breed: false,
        img: 'goat',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Goose',
        list: geeses,
        breed: false,
        img: 'goose',
        type: 'species',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Horses',
        list: horses,
        breed: true,
        img: 'horse',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Pigeons',
        list: pigeons,
        breed: true,
        img: 'pigeon',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Pigs',
        list: pigs,
        breed: true,
        img: 'pig',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'ponies',
        list: ponys,
        breed: false,
        img: 'pony',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'rabbits',
        list: rabbits,
        breed: false,
        img: 'rabbit',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Sheeps',
        list: sheeps,
        breed: true,
        img: 'sheep',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Snakes',
        list: snakes,
        breed: true,
        img: 'snake',
        type: 'species',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Turkeys',
        list: turkeys,
        breed: true,
        img: 'turkey',
        type: 'breeds',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
    {
        title: 'Turtles',
        list: turtles,
        breed: true,
        img: 'turtle',
        type: 'species',
        description: 'Lorem ipsum dolor sit amet, aliquam adversarium mea ad, pri inani molestie recusabo ea, ei eripuit feugiat expetendis nec. Sed ad modus discere torquatos, eruditi interesset mea ut. No idque impetus voluptatum eum. Eam duis quaeque te, per nullam dictas tincidunt te. Putant offendit cum at, pro ubique timeam denique ne, molestie vivendum te ius. Vis ne vitae primis.'
    },
]; 

// the list varable concatinate all our arrays into one arrays.
const list = cavys.concat(ducks, dogs, snakes, turtles, cats, turkeys, pigeons, pigs, horses, foxs, geeses, sheeps, rabbits, ponys, goats, chickens, cattles, donkeys);

let total = list.length.toLocaleString();

export { databaseList, total, list };
