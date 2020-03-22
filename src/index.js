module.exports = function toReadable(number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let numbers1 = ['thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
    let numbers2 = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];

    if (number <= 12) {
        return numbers[number];
    }
    if (number > 12 && number < 20) {
        let num = (number - 12) - 1;
        return numbers1[num] + 'teen';
    }

    if (number >= 20 && number % 10 === 0 && number < 100) {
        let num = number / 10;
        return numbers2[num - 2] + 'ty';
    }

    //единицы в десятках
    if (number >= 20 && number < 100) {
        let num = number%10;
        let ten = (number - num)/10;
        return numbers2[ten - 2] + 'ty ' + numbers[num];
    }
    //для соток
    if(number % 100 === 0){
        let num = number/100;
        return numbers[num] + ' hundred';
    }

    if(number > 100) {

        let tens = number % 100;
        let hundreds = (number - tens)/100; // сотни
        let single = tens % 10;// единицы
        let resTens = (tens - single) / 10;//десятки

        if(resTens === 0){
            if (single <10) {
                return `${numbers[hundreds]} hundred ${numbers[single]}`;
            }
        }
        if(resTens === 1){
            if(single  === 0){
                return `${numbers[hundreds]} hundred ten`;
            }
            if(single  === 1){
                return `${numbers[hundreds]} hundred eleven`;
            }
            if(single  === 2){
                return `${numbers[hundreds]} hundred twelve`;
            }
            else{
                return `${numbers[hundreds]} hundred ${numbers1[single-3]}teen`;
            }
        }

        if(single === 0) {
            return `${numbers[hundreds]} hundred ${numbers2[resTens - 2]}ty`
        }

        return `${numbers[hundreds]} hundred ${numbers2[resTens - 2]}ty ${numbers[single]}`
    }
};
