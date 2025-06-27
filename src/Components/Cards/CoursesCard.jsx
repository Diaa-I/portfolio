export default function CoursesCard({children , courseCategory}){
    let cssClassColor = 'bg-white'
    if(courseCategory==1) cssClassColor = 'bg-cyan-400'
    if(courseCategory==2) cssClassColor = 'bg-white'
    if(courseCategory==3) cssClassColor = 'bg-blue-400'
    if(courseCategory==4) cssClassColor = 'bg-yellow-400'
    return(
        <div className={"p-0.5 m-1 my-5 w-80 h-58 text-center "+ cssClassColor}>
            {children}
        </div>
    )
}