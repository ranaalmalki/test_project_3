import React from 'react';
// import './component/home_page/HomePage.css';




export default class HomePage extends React.Component {


    render() {
        return (
            <div >
                <div className="header">
                    <p> ناجز </p>
                </div>



<ul className="tilesWrap">

	<li>
		<p>
			 جواز السفر 
		</p>
		<button> قراءة المزيد </button>
	</li>

	<li>
		<p>
            إقامه 
		</p>
		<button> قراءة المزيد </button>
	</li>

	<li>
		<p>
			الهوية الوطنيه
		</p>
		<button> قراءة المزيد </button>
	</li>

	<li>
		<p>
            رخصة سياقه
		</p>
		<button> قراءة المزيد </button>
	</li>

</ul>

</div>
        );
    }
}