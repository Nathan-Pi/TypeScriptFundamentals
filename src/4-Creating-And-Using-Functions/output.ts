import { productsURL } from "../lib";

const prefix = '🐉 ';

type productType = {
  id: number;
  name: string;
  icon?: string;
}

export default async function updateOutput(id: string) {

  const products = await getProducts();
  const output = document.querySelector(`${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
  
}

function layoutProducts(products: productType[]) {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}


async function getProducts(): Promise<productType[]>{

  const response: Response = await fetch(productsURL);
  const products: productType[] = await response.json();
  return products;
}




runTheLearningSamples();

function runTheLearningSamples() {
  //hoisted
  function displayProductInfo(id: number, name: string) {
      console.log(`${prefix} typed parameters`);
      console.log(`product id = ${id} and name=${name} `);
    }
    
    displayProductInfo(10, 'Pizza')
    
    console.log(addNumbersDecleration(7, 11));
  console.log(`${prefix} function declaration`);
  function addNumbersDecleration(x:number, y:number): number{
    const sum: number = x + y
    return sum
  }
  
  const addNumbersExpression = function(x:number, y:number) {
    const sum: number = x + y
    return sum
  }
  
      
    console.log(`${prefix} function declaration`);
    console.log(addNumbersDecleration(7, 11));


    
    const sampleProducts = [
      {
        id: 10,
        name: 'Pizza slice',
        icon: 'fas fa-pizza-slice',
      },
      {
        id: 20,
        name: 'Ice cream',
        icon: 'fas fa-ice-cream',
      },
      {
        id: 30,
        name: 'Cheese',
        icon: 'fas fa-cheese',
      },
    ];

    function getProductByID(id:number): productType | undefined {
      return sampleProducts.find((p) => id === p.id)
    }

    console.log(getProductByID(10));

    function displayProducts(products: productType[]): void {
      const prodcutNames = products.map((p: productType) => {
        const name = p.name.toLowerCase();
        return name;
      });
      const msg = `sample products include: ${prodcutNames.join(', ')}`
    }
    displayProducts(sampleProducts);


    const getRandomInt = (max:number  = 1000)=> Math.floor(Math.random() * max)

    function createProduct(name: string, icon?: string): productType {

      const id = getRandomInt(1000);
      return {
        id, name, icon
      }
    }

    console.log('optional parameters')
    let pineapple = createProduct('pineapple', 'pine-apple.jpg');
    let mango = createProduct('mango')
    console.log(pineapple, mango)

    
}

