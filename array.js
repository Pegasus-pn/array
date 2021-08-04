/**
 * よく使うArray系メソッド
 */

/**
 * forEach
 *
 * 配列の中身を走査する
 *
 * @return {void}
 */
 Array.prototype.forEach = function (callback) {
    for (let i = 0, l = this.length; i < l; i++) {
      callback(this[i], i, this);
    }
  };
  
  /**
   * 使用例
   */
  const cb = function (value, index, array) {
    console.log(value, index, array);
  }
  
  [(1, 2, 3)].forEach(cb);
  
  [1, 2, 3].forEach(function (value, index) {
    console.log(value);
  });
  
  /**
   * map
   *
   * 配列からコールバックの戻り値を要素とする新しい配列を作成する
   *
   * @return {any[]}
   */
  Array.prototype.map = function (callback) {
    const array = [];
    for (let i = 0, l = this.length; i < l; i++) {
      array.push(callback(this[i], i, this));
    }
    return array;
  };
  
  [1, 2, 3].map(function (e) {
    return "hello";
  });
  // ["hello", "hello", "hello"]
  
  /**
   * filter
   *
   * 配列からコールバックがtrueとなる要素だけの配列を作成する
   *
   * @return {any[]}
   */
  Array.prototype.filter = function (callback) {
    const array = [];
    for (let i = 0, l = this.length; i < l; i++) {
      if (callback(this[i], i, this)) {
        array.push(this[i]);
      }
    }
    return array;
  };
  
  [1, 2, 3, 4, 5]
    .filter(function (e) {
      return e % 2 === 0;
    })
  
    [(1, 2, 3, 4, 5)].filter(function (e, i) {
      return i % 2 === 0;
    });
  
  /**
   * find
   *
   * 配列内でコールバックがtrueとなる最初の要素を返す
   *
   * @return {any|undefined}
   */
  Array.prototype.find = function (callback) {
    for (let i = 0, l = this.length; i < l; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return void 0;
  };
  
  /**
   * some
   *
   * 配列内でコールバックがtrueとなる要素があればtrueを返す
   *
   * @return {boolean}
   */
  Array.prototype.some = function (callback) {
    if (this.length === 0) return true;
    for (let i = 0, l = this.length; i < l; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  
  if (
    [213, 141, 3154, 12315].some(function (e) {
      return e % 3 === 0;
    })
  ) {
    console.log("3で割れるやつあったよ");
  }
  
  [213, 141, 3154, 12315].some(function (e) {
    if (e % 3 === 0) {
      return true;
    }
    console.log("3で割れないよー");
    return false;
  });
  
  /**
   * every
   *
   * 配列内でコールバックが全てtrueならtrueを返す
   *
   * @return {boolean}
   */
  Array.prototype.every = function (callback) {
    for (let i = 0, l = this.length; i < l; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  
  if (
    ![213, 141, 3154, 12315].every(function (e) {
      return e % 3 !== 0;
    })
  ) {
    console.log("3で割れるやつあったよ");
  }
  
  /**
   * reduce
   *
   * 配列から単一の値を返す
   *
   * @return {any}
   */
  Array.prototype.reduce = function (callback, initValue) {
    prevValue = initValue;
    for (let i = 0, l = this.length; i < l; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }
    return prevValue;
  };
  
  [1, 2, 3].reduce(function (prev, value) {
    return prev + value;
  }, 0);
  
  [1, 2, 3, 4, 5].reduce(function (prev, value, index) {
    return index % 2 === 0 ? prev + value : prev;
  }, 0);
  
  [1, 2, 3, 4, 5].reduce(
    function (prev, value, index) {
      if (index % 2 === 0) {
        prev.evenSum += value;
      } else {
        prev.oddSum += value;
      }
      return prev;
    },
    { evenSum: 0, oddSum: 0 }
  );
  
  const width = legendList.reduce(
    function (prev, value, index) {
      if (index % 2 === 0) {
        prev.evenWidth = Math.max(prev.evenWidth, value.clientWidth);
      } else {
        prev.oddWidth = Math.max(prev.oddWidth, value.clientWidth);
      }
      return prev;
    },
    { evenWidth: 0, oddWidth: 0 }
  );
  
  legendList
    .filter(function (e, i) {
      return i % 2 === 0;
    })
    .map(function (e) {
      return e.clientWidth;
    })
    .reduce(function (v, e) {
      return Math.max(v, e);
    }, 0);
  
  Math.max.apply(
    null,
    legendList
      .filter(function (e, i) {
        return i % 2 === 0;
      })
      .map(function (e) {
        return e.clientWidth;
      })
  );
  
  legendList
    .filter(function (e, i) {
      return i % 2 === 0;
    })
    .map(function (e) {
      return e.clientWidth;
    })
    .reduce(function (v, e) {
      return Math.max(v, e);
    }, 0);
  
  legendList
    .filter(function (e, i) {
      return i % 2 === 1;
    })
  
  
    .reduce(function (v, e) {
      return Math.max(v, e.clientWidth);
    }, 0);
  
  /**
   * slice
   *
   * 添え字を指定して配列を切り出す
   *
   * @return {any[]}
   */
  Array.prototype.slice = function (start, end) {
    start = typeof start === "undefined" ? 0 : start < 0 ? this.length + start : start;
    end = typeof end === "undefined" ? this.length : end <= 0 ? this.length + end : end;
    const array = [];
    for (let i = start; i < end; i++) {
      array.push(this[i]);
    }
    return array;
  };
  
  /**  @type {Element[]} */
  const divList = [].slice
    .apply(document.querySelectorAll("div"))
  
    [(1, 2, 3, 4)].slice();
  
  [].slice.apply([1, 2, 3, 4]);
  
  [].map.apply(document.querySelectorAll("div"), [
    function (e) {
      return e.textContent + "だよ";
    },
  ]);
  
  [].map.call(document.querySelectorAll("div"), function (e) {
    return e.textContent + "だよ";
  });
  
  document.querySelectorAll("div").slice();
  [].slice.apply(document.querySelectorAll("div"));
  
  Math.max.apply(
    null,
    legendList
      .filter(function (e, i) {
        return i % 2 === 0;
      })
      .map(function (e) {
        return e.clientWidth;
      })
  );
  
  Math.max.apply(null, [1, 2, 3, 4, 5]);
  // 可変長配列
  Math.max(1, 2, 3, 4, 5);
  
  Hoge.walk()
  
  
  Hoge.walk = function() {
  
  }
  Fuga.walk() // dame
  
  Hoge.walk()
  Hoge.prototype.walk()
  Hoge.prototype.__proto__.walk()
  Hoge.prototype.__proto__.__proto__.walk()
  Hoge.prototype.__proto__.__proto__.__proto__.walk()
  
  // Hoge.__proto__.__proto__.__proto__......... == Object.prototype
  
  Object.prototype. == null
  
  HogeはArrayを継承する
  
  Foo.prototype.__proto__がArray.prototype
  Hoge.prototype.__proto__がFoo.prototype
  Fuga.prototype.__proto__がFoo.prototype
  
  Foo.prototype.walk = function() {
  
  }
  
  