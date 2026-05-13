//union()
const a = ["a", "b", "c" , "g"];
const b = ["d", "e", "f", "g"];
const c = a.union(b);
console.log(c);

//intersection()
const d = a.intersection(b);
console.log(d);

//difference()
const e = a.difference(b);
console.log(e);

//symmetricDifference()
const f = a.symmetricDifference(b);
console.log(f);

//isSubsetOf()
const g = a.isSubsetOf(b);
console.log(g);

//isSupersetOf()
const h = a.isSupersetOf(b);
console.log(h);

//isDisjointFrom()
const i = a.isDisjointFrom(b);
console.log(i);