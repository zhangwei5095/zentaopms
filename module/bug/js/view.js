function setModal4List(colorboxClass, replaceID)
{
    $('.iframe').colorbox({width:900, height:500, iframe:true, transition:'none', onCleanup:function(){parent.location.href=parent.location.href;}})
}
