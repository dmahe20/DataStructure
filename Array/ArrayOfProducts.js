//array = [5,1,4,2]
//output = [8,40,10,20]

function arrayOfProducts(array){
    const products = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for(let i = 0; i< array.length - 1 ; i++){
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }
    let rightRunningProduct =1;
    for(let j= array.length -1; i >-1 ;i--){
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }
    return products;
}