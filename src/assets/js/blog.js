import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';

let postsHtml = '';
for (let i = 0; i < 12; i++) {
  postsHtml += `
    <div class="card">
      <div class="card-header" id="heading${i}">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapseTwo">
            Collapsible Group Item #${i + 1}
          </button>
        </h5>
      </div>
      <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#posts">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>`;
}

$('#posts').html(postsHtml).find('.collapse').carousel();