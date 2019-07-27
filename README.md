# persistant-number
##### Find the number with as many multiply operations as can.
##### Inspired by: https://www.youtube.com/watch?v=Wim9WJeDTHQ and https://www.youtube.com/watch?v=E4mrC39sEOQ

``344: 3 * 4 * 4 = 48 -> 48: 4 * 8 = 32 -> 32: 3 * 2 = 6 ---> total 3 iterations``

```
  type ResultData = {
    original: Number,
    steps: Number,
    iterations: List String
  }

  persistNumber:: Number -> ResultData
  persistRange:: (Number, Number, Number) -> List ResultData

  persistRange(1, 2, 2) // It means range from 10 to 20
  persistRange(1, 5, 3) // It means range from 1000 to 5000
```
