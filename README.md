## react_project-Resturent <br>
### 1. creating app
```
$ cd resturent project file
// react app name 'restaurant-app'
$ create-react-app restaurant-app
$ cd restaurant-app
$ npm start
//
```
### 2.  install node packages-> bootstrap@4.5.0, reactstrap@8.5.1, react-popper@2.2.3 , dateformat
reactstrap@8.5.1 : provides some built in components for designing--> like bootstrap.
after installing, if we goto package.json file--> we can see the packages that installed.
```
$ npm install bootstrap@4.5.0 --save
$ npm install reactstrap@8.5.1 --save  
$ npm install react-popper@2.2.3 --save
$ npm install dateformat --save
```
### 3. add bootstrap to project:
```
// go to index.js and add bootstrap path:
//path: node_modules\bootstrap\dist\css\bootstrap.min.css

inside index.js file--> import 'bootstrap/dist/css/bootstrap.min.css';
```
### 4. setting up files:
```
1. Delete all unnecessary code from app.js, index.js and app.css file
2. delete ./logo.svg and related imports and code of this.
```
### 5. manage folders: (setup foders for a clean and fresh )
<img src="picS/components tree.JPG"  width="60%">

### 6. setup navigation bar. at header --> create a component 'Navigation.js' --> design using reactstrap: https://reactstrap.github.io
<img src="picS/NAvigation bar.JPG"  width="70%">

### 7. Now, to work with data, we make a folder in 'src' folder named 'data'--> inside it --> 'Dishes.js' file will keep the data for restaurant items.

### 8. In data obj, we have image path. to keep images we make a directory in public folder--> named 'assets'--> inside this --> 'images' folder keeps the img.

### 9. Now, inside the body component we can make the item list view. So, inside body componet folder, create 'Manu.js'(it will ba a class based component) and 'MenuItem.js'--> . because it will have state for data. 

<img src="picS/dishes print on console.JPG"  width="70%">

#### design into ManuItem.js :-> inside 'return':
```
          <div>
                  <Card>
                        <CardBody  >
                              <CardImg width="100%" alt={props.dish.name} src={props.dish.image}></CardImg>
                              <CardImgOverlay>
                                    <CardTitle>{props.dish.name}</CardTitle>
                              </CardImgOverlay>

                        </CardBody>
                  </Card>
            </div>
```