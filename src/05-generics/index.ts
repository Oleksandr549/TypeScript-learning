
type Dossier<AdditionalInfo> = {
  name: string;
  age: number;
  additionalInfo: AdditionalInfo;
};
const dossier1: Dossier<{ occupation: string; age: number }> = {
  name: 'Alice',
  age: 30,
  additionalInfo: {
    occupation: 'Engineer',
    age: 30,
  },
};
// Contravariant annotation
// interface Consumer<in T> {
//   consume: (arg: T) => void;
// }
// // Covariant annotation
// interface Producer<out T> {
//   make(): T;
// }
// // Invariant annotation
// interface ProducerConsumer<in out T> {
//   consume: (arg: T) => void;
//   make(): T;
// }
console.log(dossier1);