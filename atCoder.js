
// Q1 - ok
// Q2 - ok
// Q3 - NG
// Q4 - 3NG 4NG
// Q% - NG
//
//
//
//
//
//
//
//
//

function isEvenOrOdd(a, b) {
  if ((a * b) % 2 === 0) {
    console.log('even')
    return
  }

  console.log('odd')
}

function InfiniteCoins(N, A) {
  if ((N % 500) <= A) {
    console.log('yes')
    return
  }

  return console.log('no')
}

function PlacingMarbles(a) {
  console.log(a.split('1').length - 1)
}

function SomethingOnIt(a) {
  let ramen = 700
  if (a[0] === 'o') ramen += 100
  if (a[1] === 'o') ramen += 100
  if (a[2] === 'o') ramen += 100

  return ramen
}

// S: 2017/08/12
function Already2018(S) {
  const SArray = S.split('/')
  if (SArray[0] === '2018') {
    return S
  }

  return `2018/${SArray[1]}/${SArray[2]}`
}

function i18n(N) {
  const str = N.length - 2

  return `${N[0]}${str}${N[N.length - 1]}`
}

// TODO
function TwoAnagrams(s, t) {
  const sUpperCase = s.toUpperCase()
  const tUpperCase = s.toUpperCase()

  if (sUpperCase < tUpperCase) return 'Yes'

  return 'No'
}

// TODO 3-1 ShiftOnly
function ShiftOnly(A) {
  let count = 0
  let array = A

  while (array.every((n) => {
    n % 2 === 0 // 配列の全ての値が偶数である限りループする
  })) {
    count++
    array = array.map((n) => {
      n / 2
    })
  }

  return count
}

function Coins(A, B, C, X) {
  let count = 0

  for (let a = 0; a <= A; ++a) {
    for (let b = 0; b <= B; ++b) {
      for (let c = 0; c <=C; ++c) {
        let sum = (a * 500) + (b * 100) + (c * 50)
        if (sum === X) ++count
      }
    }
  }

  return console.log(count)
}

// 4A + 7B = N
function Cakes(N) {
  let donut = 0
  while (donut * 7 <= N) {
    if ((N - donut * 7) % 4 === 0) {
      console.log('Yes')
      break
    }
    ++donut
  }
}

isEvenOrOdd(3, 5)
InfiniteCoins(2018, 17)
PlacingMarbles('100000111001011')
SomethingOnIt('oxo')
Already2018('2017/08/12')
Already2018('2017/02/12')
i18n('xyz')
TwoAnagrams('ratcode', 'atlas')
ShiftOnly([8, 12, 40])
Coins(2,2,2,100)
