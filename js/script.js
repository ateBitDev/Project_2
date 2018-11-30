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
//takes in a list of stduents and creates a tag buttons
const appendPageLinks = (list) =>
{
  let paginationDiv = document.createElement('div');
  const ul = document.createElement('ul');
  paginationDiv.className = 'pagination';
  page.appendChild(paginationDiv);
  paginationDiv.appendChild(ul)

//creates tags with page numbers
  for (let i = 0; i < numOfPages; i += 1)
  {

    const li = document.createElement('li');
    const  a = document.createElement('a');

    a.textContent = ((i+1).toString());

    ul.appendChild(li);
    li.appendChild(a);

    a.addEventListener('click', (e) => {
      let page = e.target;
      let aTags = document.querySelectorAll('a');
//highlights current page tag
      for (let i = 0; i < aTags.length;i += 1)
      {
        if(aTags[i] === page)
        aTags[i].style.backgroundColor = 'highlight';
        else {
        aTags[i].style.backgroundColor = '';
        }
      }

      showPage(studentList,parseInt(page.textContent));
});
}
};
//initail call of func to create a tags
appendPageLinks(studentList);
//called so page loads only first 10 students
showPage(studentList,1);
