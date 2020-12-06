const nums = [1,2,3,4,5,6,7,8,9,10];

for (x in nums) {
    if (x == 5) {
        break // Causa um desfio de fluxo para fora do LAÇO corrente, não em cima do if e sim em cima do for 
    }
    console.log(`${x} = ${nums[x]}`)
}

for (x in nums) {
    if (x == 5) {
        continue // interrompe a repetição corrente e vai para próxima 
    }
    console.log(`${x} = ${nums[x]}`)
}