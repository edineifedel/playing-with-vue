Vue.component('product-review', {
    props: [],
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors=[];
            if (this.name && this.review && this.rating) {
                let formReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('add-review', formReview);
                this.name = this.review = this.rating = null;
            } else {
                if (!this.name) this.errors.push('Name must filled');
                if (!this.review) this.errors.push('Review must filled');
                if (!this.rating) this.errors.push('Rating must filled');
            }
        }
    },
    template: `
        <form class="review-form" @submit.prevent="onSubmit">

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            
            <p>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="review"></textarea>
            </p>
            
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>
                
            <div>
                <input type="submit" value="Submit">  
            </div>    
        
        </form>
    `
})