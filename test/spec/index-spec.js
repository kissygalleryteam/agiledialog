KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('agiledialog', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/agiledialog/1.0.5/']});