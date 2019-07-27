const per = n => innerPer(n)(0)([])(n.toString());
const visualize = orig => o => d => i => ({ res: o.res * d, vis: `${i > 1 ? `${o.vis} * ` : `[${orig}: ${o.res} * `}${d}${i === orig.length - 1 ? ` = ${o.res*d}]` : ''}` });
const multiplyer = str => str.split('').reduce((o, d, i) => visualize(str)(o)(d)(i), ({ res: 1, vis: '' }));
const parse = iterations => iterations.map(iteration => iteration.vis);
const makeResult = original => steps => iterations => ({ original, steps, iterations });
const pickRes = obj => obj.res.toString();
const acc = n => ++n;
const concat = arr => item => [...arr, item];
const cond = c => t => f => c ? t() : f();
const lazy = f => a => () => f(a);
const eq = x => y => x === y;
const len = x => x.length;

const innerPer = original => steps => iterations => str =>
  cond(eq(len(str))(1))
    (lazy(makeResult(original)(steps))(parse(iterations)))
    (lazy(innerPer(original)(acc(steps))(concat(iterations)(multiplyer(str))))(pickRes(multiplyer(str))));

module.exports.per = per;
