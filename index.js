var logger = x => (console.log(x),x);
var per = n => innerPer(n)(0)([])(n.toString());
var visualize = orig => o => d => i => ({ res: o.res * d, vis: `${i > 1 ? `${o.vis} * ` : `[${orig}: ${o.res} * `}${d}${i === orig.length - 1 ? ` = ${o.res*d}]` : ''}` });
var multiplyer = str => str.split('').reduce((o, d, i) => visualize(str)(o)(d)(i), ({ res: 1, vis: '' }));
var parse = iterations => iterations.map(iteration => iteration.vis);
var makeResult = original => steps => iterations => ({ original, steps, iterations });
var pickRes = obj => obj.res.toString();
var acc = n => ++n;
var concat = arr => item => [...arr, item];
var cond = c => t => f => c ? t() : f();
var lazy = f => a => () => f(a);
var eq = x => y => x === y;
var len = x => x.length;

var innerPer = original => steps => iterations => str =>
  cond(eq(len(str))(1))
    (lazy(makeResult(original)(steps))(parse(iterations)))
    (lazy(innerPer(original)(acc(steps))(concat(iterations)(multiplyer(str))))(pickRes(multiplyer(str))));

try{
    while(true)per(277)    
} catch(e) {
    console.log(e);
}
