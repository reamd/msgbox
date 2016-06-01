/**
 * Created by reamd on 2016/2/25.
 */
describe("msgBox", function() {
    var should = chai.should();
    it("should is a object", function() {
        var msgbox = new msgBox({});
        msgbox.should.be.a('object');
    });
    it("check it property", function() {
        var msgbox = new msgBox({});
        msgbox.should.have.property('width').with.equal('');
        msgbox.should.have.property('minWidth').with.equal('0');
        msgbox.should.have.property('maxWidth').with.equal('100%');
        msgbox.should.have.property('height').with.equal('');
        msgbox.should.have.property('title').with.equal('');
        msgbox.should.have.property('body').with.equal('');
        msgbox.should.have.property('btnLabel').with.a('array').with.length(0);
        msgbox.should.have.property('visible').with.equal(true);
        msgbox.should.have.property('isClose').with.equal(true);
        msgbox.should.have.property('openMsg').with.a('function');
        msgbox.should.have.property('closeMsg').with.a('function');
        msgbox.should.have.property('complete').with.a('function');
        msgbox.should.have.property('firstCallback').with.a('function');
        msgbox.should.have.property('secondCallback').with.a('function');
    });
});