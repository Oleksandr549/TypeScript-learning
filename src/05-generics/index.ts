
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
console.log(dossier1);