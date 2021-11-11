const begin = ['Not all', 
'All’s well', 
'Deeds will not be', 
'Even the', 
'You step into the Road,', 
'Let him not vow to walk in the dark,', 
'It’s the job that’s ', 'Your time will come.', 
'If more of us valued food and cheer', 'A hunted man', 
'It is useless', 'But do not despise the lore', 
'This day does not belong to one man but to all.', 
'Despair is only for', 
'Memory is'];
const mid = ['those who wander', 
'that ends', 
'less valiant because', 
'smallest person', 
'and if you don’t keep your feet,', 
'who has not seen', 'never started', 
'You will face the same Evil,', 
'and song above hoarded gold,', 
'sometimes wearies of distrust', 
'to meet revenge with revenge:', 
'that has come down from distant years;', 
'Let us together rebuild this world', 
'those who see the end beyond all doubt.', 
'not what the heart desires.'];
const end = ['are lost.', 
'better you', 
'they are unpraised.', 
'can change the course of the future.', 
'there is no knowing where you might be swept off to.', 
'the nightfall', 'as takes longest to finish.', 
'and you will defeat it.', 
'it would be a merrier world', 
'and longs for friendship.', 
'it will heal nothing.',
'for oft it may chance that old wives keep in memory word of things that once were needful for the wise to know', 
'that we may share in the days of peace',
'We do not.', 
'That is only a mirror.'];
let random = Math.floor(Math.random() * begin.length);
const jumbled = () => {
    const random = array => {
        return Math.floor(Math.random() * array.length)
    }
    let beginning = begin[random(begin)];
    let middle = mid[random(mid)];
    let ending = end[random(end)];
    return `Your personal nonsense quote is: \n ${beginning} \n ${middle} \n ${ending}`
} 
console.log(jumbled())