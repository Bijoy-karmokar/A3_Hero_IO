import Notiflix from "notiflix";

const getApps = ()=>{
    const storedApps = localStorage.getItem("apps");
    return storedApps ? JSON.parse(storedApps) : [];
}

const savedApps =(id)=>{
    const apps = getApps();
    if(apps.includes(id)){
        Notiflix.Notify.failure("Apps already exsist.");

    }else{
        apps.push(id);
        const data = JSON.stringify(apps);
        localStorage.setItem('apps',data)
        // console.log(apps);
    }
}

const removedApps = (id) => {
  const apps = getApps();
  const updatedApps = apps.filter(app => app !== id);
  localStorage.setItem("apps", JSON.stringify(updatedApps));
};

export {getApps,savedApps,removedApps}