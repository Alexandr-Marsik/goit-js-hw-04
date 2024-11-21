/**Напиши функцию isEnoughCapacity(products, containerSize), которая вычисляет, поместятся ли все товары в контейнер при упаковке.
 *Функция объявляет два параметра:
 products - объект, в котором ключи содержат названия товаров, а их значения - количество этих товаров. Например, { apples: 2, виноград: 4 }.
 containerSize - число, максимальное количество единиц товаров, которое в себя может вместить контейнер.
 Функция должна вернуть результат проверки, поместятся ли все товары в контейнер. То есть посчитать общее количество товаров в объекте products и вернуть true, если оно меньше или равно containerSize, и false, если нет.

 */

function isEnoughCapacity(products, containerSize) {
  let total = 0
  for (const product of Object.values(products)) {
    total += product
  }
  return total<=containerSize
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
