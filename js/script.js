const page = document.querySelector('.page');
const list = document.querySelector('ul');
const studentList = list.children;
const numOfPages = (studentList.length/10);
//takes in a list of students and page number
const  showPage = (list,page) =>
{
  for (let i = 0; i < list.length; i += 1)
  {
    //if index is within page number intervals shows  up on screen
      if (i >= ((page*10)-10) && i < (page*10))
      {
          list[i].style.display = 'block';
      }
      else
      {
          list[i].style.display = 'none';
      }
  }
}
//takes in a list of students and creates a tag buttons
const appendPageLinks = (list) =>
{
  const paginationDiv = document.createElement('div');
  const ul = document.createElement('ul');

  paginationDiv.className = 'pagination';
  page.appendChild(paginationDiv);
  paginationDiv.appendChild(ul);

//creates tags with page numbers
  for (let i = 0; i < numOfPages; i += 1)
  {
    const li = document.createElement('li');
    const  a = document.createElement('a');

    a.textContent = (i + 1);

    ul.appendChild(li);
    li.appendChild(a);

    if (a.textContent === '1')
    //starts page off with first atag highlighted
    a.style.backgroundColor = 'highlight';

    a.addEventListener('click', (e) => {

      const aTags = document.querySelectorAll('a');
      let page = e.target;
      page.className = 'active';

      //highlights current page tag
      for (let i = 0; i < aTags.length; i += 1)
      {
        if (aTags[i] === page)
        {
        page.style.backgroundColor = 'highlight';
        }
        else
        {
          aTags[i].style.backgroundColor = '';
          aTags[i].className = '';
        }
      }
      showPage(studentList,page.textContent);
});
}
};
//initial call of func to show page '1' first
showPage(studentList,1)
//initial call of func to create a tags
appendPageLinks(studentList);
