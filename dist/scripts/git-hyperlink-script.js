console.log(' usser vừa truy cập git');
// check jquery existed
console.log('check jquery');
if (typeof $ !== 'undefined') {
  console.log('jquery existed');
}
const jiraHost = 'https://jira.evotek.vn/browse/';
// get element by selector using jquery
// map thông tin title to hyperlink
const selector = '.detail-page-description > h2';
const $mergeTitleElement = $(selector);
const mergeName = $mergeTitleElement?.text()?.trim();

const regexMergeName = /^[A-Za-z0-9]+-\d+/;
if (mergeName) {
  const matchedElements = mergeName.match(regexMergeName);

  if (matchedElements) {
    const resultString = matchedElements.join(' ').trim();
    console.log(resultString); // In ra "EVQLTN-131"
    const jiraTicketHerf = jiraHost + resultString;
    // replace h2 to a tag with href
    const aHrefUrlElement = $mergeTitleElement.replaceWith(`<a href="${jiraTicketHerf}" class="title mb-0" style="font-weight: 600; color: #3f91e1" target="_blank" rel="noopener">${mergeName}</a>`);
    console.log(aHrefUrlElement);

  } else {
    console.log("Không tìm thấy phần tử khớp với regex trong chuỗi.");
  }

}
