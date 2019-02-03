export default function titleinitials(title) {
  try {
    return title
      .split(' ')
      .map(word => word[0])
      .map(char => char.toUpperCase())
      .slice(0, 2)
      .join('');
  } catch(e){
    console.error(e);
    return 'ошибка';
  }
}
