const separator = document.querySelector('#separator');
const content = document.querySelector('#content');
const left_block = document.querySelector('#l_block');
const right_block = document.querySelector('.right-block');
let isDragging = false;

separator.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    left_block.style.width = (e.screenX - content.getBoundingClientRect().left) + 'px';
    viewSizeBlock(left_block);
    viewSizeBlock(right_block);
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function viewSizeBlock(block) {
  const size_blocks = block.querySelectorAll('.size-block');
  const width = block.offsetWidth;
  const height = block.offsetHeight;
  if (size_blocks.length > 0) {
    size_blocks[0].innerHTML = `<p>${width} / ${height}</p>`;
  } else {
    const div = document.createElement('div');
    div.classList.add('size-block');
    div.innerHTML = `<p>${width} / ${height}</p>`;
    block.appendChild(div);
  }
}