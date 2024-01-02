import carrinho from '~/assets/products/carrinho.jpg';
import cursoDesenho from '~/assets/products/curso-desenho.jpg';
import panelas from '~/assets/products/panelas.jpg';
import piscina from '~/assets/products/piscina.jpg';
import licor from '~/assets/products/licor.jpg';
import potes from '~/assets/products/potes.jpg';
import martelete from '~/assets/products/martelete.jpg';
import salton from '~/assets/products/salton.jpg';
import parafusadeira from '~/assets/products/parafusadeira.jpg';

export const products = [
  {
    id: 1,
    title: 'carrinho',
    categories: 'presentes',
    point: 2550,
    description: 'Veículo Elétrico Mercedez Bens, Branco',
    image: carrinho,
  },
  {
    id: 2,
    title: 'curso-desenho',
    categories: 'informática',
    point: 50,
    description: 'Curso desenho, aprenda em 3 meses.',
    image: cursoDesenho,
  },
  {
    id: 3,
    title: 'salton',
    categories: 'bebidas',
    point: 370,
    description: 'Brilhante, de coloração amarelo-esverdeado, com abundante desprendimento de finas borbulhas.',
    image: salton,
  },
  {
    id: 4,
    title: 'piscina',
    categories: 'presentes',
    point: 1100,
    description: 'Piscina Chafariz Infantil 170cm Splash Sprinkler Pad',
    image: piscina,
  },
  {
    id: 5,
    title: 'licor',
    categories: 'bebidas',
    point: 170,
    description: 'Destilado de frutas e ervas, água',
    image: licor,
  },
  {
    id: 6,
    title: 'parafusadeira',
    categories: 'ferramentas',
    point: 880,
    description: 'Acompanha: 1 maleta, 1 bateria de 12 V, 6 brocas de aço rápido, 6 bits e 1 soquete magnético encaixe de 1/4"',
    image: parafusadeira,
  },
  {
    id: 7,
    title: 'potes',
    categories: 'presentes',
    point: 250,
    description: 'kit 10 Potes de Vidro Redondo 250ML com Tampa de Bambu - Oikos',
    image: potes,
  },
  {
    id: 8,
    title: 'martelete',
    categories: 'ferramentas',
    point: 900,
    description: 'O Martelo Perfurador Rompedor Bosch GBH 2-24 D ',
    image: martelete,
  },
  {
    id: 9,
    title: 'panelas',
    categories: 'ferramentas',
    point: 1208,
    description: 'Jogo de Panelas Tramontina Antiaderente Turim 7 Pç Vermelho',
    image: panelas,
  },
]