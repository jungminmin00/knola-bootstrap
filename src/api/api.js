import courses from './products.json';

export function getCourseBySlug(couseSlug){
    return courses.find((couse) => couse.slug === couseSlug)   
}

export function getcourseByReview(courseId){
    return courses.find((rev) => rev.reId === courseId)
}

const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}') 

export function getWishList(){
    return courses.filter((courses) => wishlist[courses.slug]);
}
export function addWishList(courseSlug){
    wishlist[courseSlug] = true;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
export function deleteWishList(courseSlug){
    delete wishlist[courseSlug];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
}