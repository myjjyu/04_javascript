const arr = [5, 3, 2, 8, 9];

const data = [5, 3, 2, 8, 9];
console.log(data);

const p = data.length % 2 == 0 ? data / 2 : (data.length - 1) / 2;

for (let i = 0; i < p; i++) {
  const k = data.length - i - 1;

  const tmp = data[i];
  data[i] = data[k];
  data[k] = tmp;
}
console.log(data);
