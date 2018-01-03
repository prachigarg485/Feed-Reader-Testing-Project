$(function() {
    
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

it('URL defined and is not empty', function() {
    allFeeds.forEach(function(feed) {
        feedUrl = feed.url;
        expect(feedUrl).toBeDefined();
        expect(feedUrl.length).not.toBe(0);
    });
});

// allFeeds object and ensures it has a name defined and not empty
it('name is defined and not empty', function() {
    allFeeds.forEach(function(feed) {
        feddName = feed.name;
        expect(feddName).toBeDefined();
        expect(feddName.length).not.toBe(0);
    });
});
});

describe('The menu', function() {
it('hidden menu', function() {
    expect($('.menu-hidden').is(':visible')).toBe(true);
});

it('visible on click', function() {
    $('a.menu-icon-link').trigger('click');
    expect($('.menu-hidden').is(':visible')).toBe(false);
});

it('hidden when clicked again', function() {
    $('a.menu-icon-link').trigger('click');
    expect($('.menu-hidden').is(':visible')).toBe(true);
});
});

describe('Initial Entries', function() {
beforeEach(function(done) {
    loadFeed(0, done);
});

it('entry element is present', function(){
    expect($('.feed .entry').length).toBeGreaterThan(0);
});
});

describe('New Feed Selection', function(){
var feed;

beforeEach(function(done) {
    loadFeed(0, function() {
        feed = $('.feed').html();
        loadFeed(1, done);
    });
});

it('has been loaded', function(){
   expect($('.feed').html()).not.toEqual(feed);
});
});
}());
 