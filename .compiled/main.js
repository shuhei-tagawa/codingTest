"use strict";

function Product(a, b) {
  if (a * b % 2 === 0) {
    return 'Even';
  }

  return 'Odd';
}

function RGVCards(r, g, b) {
  var card = "".concat(r).concat(g).concat(b);

  if (card % 4 === 0) {
    return 'YES';
  }

  return 'NO';
}

function InfiniteCoins(N, A) {
  var changes = N % 500;

  if (changes === 0) {
    return 'Yes';
  } else {
    if (changes > A) {
      return 'No';
    }

    return 'Yes';
  }
}

function RoundUpTheMean(a, b) {
  return Math.ceil((a + b) / 2);
}
/* END OF 1 */

/* START OF 2 */


function PlacingMarbles(A) {
  var newArr = A.split('1');
  return newArr.filter(function (w, i) {
    return w === "";
  });
}

function SomethingOnIt(S) {
  return 700 + (S.split('o').length - 1) * 100;
}

function Already2018(S) {
  var ymdArr = S.split('/');

  if (ymdArr[0] === '2017') {
    ymdArr[0] = '2018';
  }

  return ymdArr.join('/');
}

function i18n(s) {
  return "".concat(s[0]).concat(s.length - 2).concat(s[s.length - 1]);
}
/* START OF 3 */


function ShiftOnly(N) {
  var count = 0;

  while (N.every(function (n) {
    return n % 2 === 0;
  })) {
    // 配列の全ての内容が偶数の間
    count++;
    N = N.map(function (n) {
      return n / 2;
    });
  }

  return count;
}

function BreakNumber(N) {
  var result = 0;

  for (var i = 1; i <= N; i++) {
    var count = 0;
    var ii = i;

    while (ii % 2 === 0) {
      count++;
      ii /= 2;
    }

    if (result < count) {
      result = i;
    }
  }

  return console.log(result);
}

function maximumDifference(N) {
  return Math.max.apply(null, N) - Math.min.apply(null, N);
}

function OddString(s) {
  var result = '';
  s.split('').map(function (n, i) {
    if (i % 2 !== 0) return;
    return result += n;
  });
  return result;
}

function BinalyAlchemy(X, L) {
  var changes = X - L.reduce(function (a, b) {
    return a + b;
  });
  var min = Math.min.apply(null, L);
  return Math.floor(changes / min) + L.length;
}
/* START OF 4 */


function coins(A, B, C, X) {
  var count = 0;

  for (var a = 0; a <= A; ++a) {
    for (var b = 0; b <= B; ++b) {
      for (var c = 0; c <= C; ++c) {
        var sum = 500 * a + 100 * b + 50 * c;

        if (sum === X) {
          conut++;
        }
      }
    }
  }

  return count;
}

function cakes(N) {
  var count = 0;

  for (var a = 0; a <= N / 7; a++) {
    for (var b = 0; b <= N / 4; b++) {
      if (7 * a + 4 * b === N) {
        return 'Yes';
      }
    }
  }

  return 'No';
}

function someSums(N, A, B) {
  var nums = Array.from(new Array(N), function (v, i) {
    return ++i;
  }).filter(function (i) {
    var n = i.toString().split('').reduce(function (p, c) {
      return p + parseInt(c);
    }, 0);
    return n >= A && n <= B;
  });
  return nums.reduce(function (p, c) {
    return p + c;
  }, 0);
}

function harshadNumber(X) {
  var sum = X.toString().split('').reduce(function (p, c) {
    return p + parseInt(c);
  }, 0);
  if (X % sum === 0) return 'Yes';
  return 'NO';
}

function cardGame(N) {
  var aPoint = 0;
  var bPoint = 0;
  N.sort().map(function (n, i) {
    if (i % 2 !== 0) {
      aPoint += n;
    } else {
      bPoint += n;
    }
  });
  return aPoint - bPoint;
}

function snakeToy(K, L) {
  var newArr = L.sort().reverse();
  var sum = 0;

  for (var i = 1; i <= K; i++) {
    sum += L[i - 1];
  }

  return sum;
}

function groupContest(N, L) {
  var teamA = [];
  var teamB = [];
  L.sort().map(function (n, i) {
    if (i % 2 !== 0) {
      teamA.unshift(n);
    } else {
      teamB.unshift(n);
    }
  });
  return teamA[1] + teamB[1];
}

console.log(groupContest(2, [5, 2, 8, 6, 1, 5]));
//# sourceMappingURL=main.js.map