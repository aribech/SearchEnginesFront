import React, { Component,useState } from 'react';
import './NewSearchEngine.css';
import Button from "@material-ui/core/Button";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import * as actions from "../actions/engine";

const GreenSwitch = withStyles((theme) => ({
    switchBase: {
      color: green[200],
      '&$checked': {
        color: green[800],
        '&:hover': {
          backgroundColor: green[700],
        },
      },
      '&$checked + $track': {
        backgroundColor: green[400],
      },
    },
    checked: {},
    track: {},
  }))(Switch);


function Titre()
{
    return (
                <Typography variant={"subtitle1"}
                      style={
                            {
                                fontSize: 20,
                                paddingTop:10, 
                                paddingBottom:10,
                                paddingLeft:10,
                            }
                        }
                > EDITION D'UN MOTEUR DE RECHERCHE:
                </Typography>
            )

}


function BackButton()
{
    return (

                <Button
                      style={{
                          color: 'white',
                          fontSize: 20
                      }}
                      startIcon={<ArrowBackIosRoundedIcon />}
                      href="/SearchEngines"
                    >
                        Back
                    </Button>
            )
}


const useButtonStyle = makeStyles(
    {
        root : {
            
            borderRadius : 10,
            color :'white',
            fontSize: 23.5,
        }
    }
)
function ButtonShowngine()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} href="/NewSearchEngine" startIcon={<VisibilityIcon />} 
                variant="contained" color="primary"
            > PRÉVISUALISER</Button>
}

function ButtonSaveEngine()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} href="/NewSearchEngine" startIcon={<SaveIcon />} 
                variant="contained" color="primary" type="submit"
            > ENREGISTRER</Button>
}


const initialFiledValues = {
    name:'',
    active:false,
    code:''
}


 
export class NewSearchEngine extends Component
{
    constructor() {
        super();
        this.state = {
          showHideGeneralInfo: true,
          showHideVisualManagement: false,
          showHideSearchManagement: false,
          InputRange:'',
          TypeFirstInput:true,
          TypeSecondInput:true,
          values:{
          //  code: ,
            isEnable: false,
            name: "",
            searchText: "string",
            scopes: [
              {
                scopeId: 0,
                order: 0,
                name: "string",
                isEnable: true
              }
            ],
            inputFields: [
              {
                inputId: 0,
                isEnable: true,
                isMandatory: true,
                label: "string",
                order: 0,
                type: "string",
                parameters: [
                  {
                    scopeParameterId: 0,
                    externalCodeId: 0,
                    order: 0,
                    label: "string"
                  }
                ]
              }
            ],
            backGroundImages: [
              {
                alt: "string",
                isEnable: true,
                openInNewTab: true,
                order: 0,
                urlImageDesktop: "string",
                urlLinkDesktop: "string",
                urlImageMobile: "string",
                urlLinkMobile: "string"
              }
            ],
            logo: {
              urlImageDesktop: "",
              urlLinkDesktop: "",
              urlImageMobile: "",
              urlLinkMobile: "",
              alt: "",
              isEnable: true,
              openInNewTab: true
            },
            marketingText: {
              isEnable: true,
              text: "string"
            }
          },
          errors:{
                    name:'',
                    code:''
            },
        };
        this.hideComponent = this.hideComponent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    InputRangeHandler = (event) => {
        this.setState({InputRange: event.target.value})
    }

    TypeFirstInputHandler = (event) => {
        if(event.target.value === 'ADRESSE')
            this.setState({TypeFirstInput: false})
        else
            this.setState({TypeFirstInput: true})
    }

    TypeSecondInputHandler = (event) => {
        if(event.target.value === 'ADRESSE')
            this.setState({TypeSecondInput: false})
        else
        this.setState({TypeSecondInput: true})
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideGeneralInfo":
            this.setState({ showHideGeneralInfo: !this.state.showHideGeneralInfo });
            break;
          case "showHideVisualManagement":
            this.setState({ showHideVisualManagement: !this.state.showHideVisualManagement });
            break;
          case "showHideSearchManagement":
            this.setState({ showHideSearchManagement: !this.state.showHideSearchManagement });
            break;
          default:
            this.setState({ showHideGeneralInfo: this.state.showHideGeneralInfo });;
        }
      }
    
    validateName = () => {
        if(this.state.values.name.length==0)
        {
            this.setState({errors: {
                ...this.state.errors,
                name:'Ce champ est obligatoire!',
            }}); 
        }else
        {
            this.setState({errors: {
                ...this.state.errors,
                name:'',
            }}); 
        }
    }


    handleInputChange=(event) =>
    {
        switch (event.target.name) {
            case 'Name':
                this.setState({values: {
                    ...this.state.values,
                    name:event.target.value
                }});
                this.validateName();
                break;
            case 'Code':
                this.setState({values: {
                    ...this.state.values,
                    code:event.target.value
                }});
                break;
            case 'isEnable':
                this.setState({values: {
                    ...this.state.values,
                    isEnable:!this.state.values.isEnable
                }});
                break;
            case 'LogoUrlImageDesktop':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        urlImageDesktop:event.target.value,
                    }
                }});
                break;
            case 'LogoUrlImageMobile':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        urlImageMobile:event.target.value,
                    }
                }});
                break;
            case 'LogoAlt':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        alt:event.target.value,
                    }
                }});
                break;
            case 'LogoIsEnable':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        isEnable:!this.state.values.logo.isEnable,
                    }
                }});
                break;
            case 'LogoOpenInNewTab':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        openInNewTab:!this.state.values.logo.openInNewTab,
                    }
                }});
                break;
            case 'LogoUrlLinkDesktop':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        urlLinkDesktop:event.target.value,
                    }
                }});
                break;
            case 'LogoUrlLinkMobile':
                this.setState({values: {
                    ...this.state.values,
                    logo:{
                        ...this.state.values.logo,
                        urlLinkMobile:event.target.value,
                    }
                }});
                break;
            case 'MarketingText':
                this.setState({values: {
                    ...this.state.values,
                    marketingText:{
                        ...this.state.values.marketingText,
                        text:event.target.value,
                    }
                }});
                break;
            case 'MarketingTextIsEnable':
                this.setState({values: {
                    ...this.state.values,
                    marketingText:{
                        ...this.state.values.marketingText,
                        isEnable:!this.state.values.marketingText.isEnable,
                    }
                }});
                break;
            default:
                break;
        }
        
    }


    validate =() => {
        let temp={}
        temp.name=this.state.values.name?"":"Ce champ est obligatoire!"
        temp.code=this.state.values.code?"":"Ce champ est obligatoire!"
        this.setState({errors: {
            ...temp,
        }});     
        //console.log(this.state.errors);
        return Object.values(temp).every(x => x =="");
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        console.log(this.state.values);
        
        if(this.validate())
            actions.create(this.state.values,(message)=>{window.alert(message)});
        else
            console.log("nohings happen")
       
    }
    render()
    {  
        const { showHideGeneralInfo, showHideVisualManagement,showHideSearchManagement,TypeFirstInput,TypeSecondInput, values,errors} = this.state;
        return(
            <Container maxWidth="fluid"> 
            <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <div class="wrapper" >
                        <Grid container  >
                            <Grid item xs={1}><div class=" left"> <BackButton /></div> </Grid>
                            <Grid item xs={7}>
                                <div class=" center">
                                    <Typography variant={"subtitle1"}
                                        style={
                                                {
                                                    fontSize: 20,
                                                    paddingTop:10, 
                                                    paddingBottom:10,
                                                    paddingLeft:10,
                                                }
                                            }
                                    > EDITION D'UN MOTEUR DE RECHERCHE: {this.state.values.name} 
                                    </Typography>         
                                </div>
                            </Grid>
                            <Grid item xs={2}><div class=" right"><ButtonShowngine /></div> </Grid>
                            <Grid item xs={2}><div class=" right">
                            <Button  href="/NewSearchEngine" startIcon={<SaveIcon />} 
                                        variant="contained" color="primary" type="submit"
                                        onClick={this.handleSubmit}
                                        style={{
                                            borderRadius : 10,
                                            color :'white',
                                            fontSize: 23.5,
                                        }}
                                    > ENREGISTRER</Button>
                                </div> </Grid>
                        </Grid>
                    </div>
               <div class="formBody">
                        <div class="secionHead">
                            <Button startIcon={<ExpandLessIcon />} 
                                onClick={() => this.hideComponent("showHideGeneralInfo")}
                                style = {{fontSize:20, }}
                                >
                             | INFORMATIONS GENERALES
                            </Button>  
                            
                        </div>

                        { showHideGeneralInfo && 
                            <div class="generalInfosForm">

                                    <p class="grayText">MOTEUR DE RECHERCHE</p>
                                    <Grid container direction="row">
                                        <Grid item xs={3}>
                                        <InputLabel htmlFor="Name">NOM DU MOTEUR</InputLabel>
                                        <TextField
                                                required
                                                id="Name"
                                                name="Name"
                                                variant="outlined"  fullWidth
                                                value={values.name}
                                                onChange={this.handleInputChange}
                                                {...(errors.name && { error:true, helperText:errors.name })}
                                                
                                        />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={3}>
                                        <InputLabel htmlFor="isEnable">MOTEUR ACTIVE</InputLabel>
                                            <GreenSwitch
                                                id="isEnable"
                                                name="isEnable"
                                                defaultChecked={values.isEnable}
                                                onChange={this.handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <InputLabel htmlFor="Code">ID MOTEUR</InputLabel>
                                            <TextField
                                                required
                                                id="Code"
                                                name="Code"
                                                variant="outlined" fullWidth
                                                value={values.code}
                                                onChange={this.handleInputChange}
                                                {...(errors.code && { error:true, helperText:errors.code })}
                                            />
                                        </Grid>
                                    </Grid>
                                
                            </div>
                        }

                        <div class="secionHead">
                            <Button startIcon={<ExpandLessIcon />} 
                                onClick={() => this.hideComponent("showHideVisualManagement")}
                                style = {{fontSize:20, }}
                                >
                             | GESTION DU VISUEL
                            </Button>  
                            
                        </div>

                        { showHideVisualManagement && 
                            <div class="visualManagement">
                                <Grid container direction="row" >
                                    <Grid item xs={3}>
                                        <div class="previwDiv">
                                            <Grid container direction="row" >
                                                <Grid item xs={4}></Grid>
                                                <Grid item xs={4}>
                                                    <label class="LabelForm">PAERCU PC</label>
                                                </Grid>
                                                <Grid item xs={4}></Grid>
                                            </Grid>
                                            <Grid container direction="row" >
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={10}>
                                                    <img class="fit-picture"
                                                    src={this.state.values.logo.urlImageDesktop}
                                                    alt={this.state.values.logo.alt}></img>
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                            </Grid>
                                            <Grid container direction="row" >
                                                <Grid item xs={4}></Grid>
                                                <Grid item xs={4}>
                                                    <label class="LabelForm">PAERCU MOBILE</label>
                                                </Grid>
                                                <Grid item xs={4}></Grid>
                                            </Grid>
                                            <Grid container direction="row" >
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={10}>
                                                    <img class="fit-picture"
                                                    src={this.state.values.logo.urlImageMobile}
                                                    alt={this.state.values.logo.alt}></img>
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                            </Grid>
                                            
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div class="visualFormDiv">
                                            <Grid container direction="row">
                                                <Grid item xs={4}>
                                                <InputLabel class="LabelForm" htmlFor="LogoUrlImageDesktop">URL IMAGE PC</InputLabel>
                                                <TextField
                                                        required
                                                        id="LogoUrlImageDesktop"
                                                        name="LogoUrlImageDesktop"
                                                        value={values.logo.urlImageDesktop}
                                                        onChange={this.handleInputChange}
                                                        variant="outlined" fullWidth

                                                />
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={4}>
                                                <InputLabel class="LabelForm" htmlFor="LogoUrlLinkDesktop">LIEN PC</InputLabel>
                                                    <TextField
                                                        required
                                                        id="LogoUrlLinkDesktop"
                                                        name="LogoUrlLinkDesktop"
                                                        value={values.logo.urlLinkDesktop}
                                                        onChange={this.handleInputChange}
                                                        variant="outlined" fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row">
                                                <Grid item xs={4}>
                                                <InputLabel class="LabelForm" htmlFor="LogoUrlImageMobile">URL IMAGE MOBILE</InputLabel>
                                                <TextField
                                                        required
                                                        id="LogoUrlImageMobile"
                                                        name="LogoUrlImageMobile"
                                                        value={values.logo.urlImageMobile}
                                                        onChange={this.handleInputChange}
                                                        variant="outlined" fullWidth

                                                />
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={4}>
                                                <InputLabel class="LabelForm" htmlFor="LogoUrlLinkMobile">LIEN MOBILE</InputLabel>
                                                    <TextField
                                                        required
                                                        id="LogoUrlLinkMobile"
                                                        name="LogoUrlLinkMobile"
                                                        value={values.logo.urlLinkMobile}
                                                        onChange={this.handleInputChange}
                                                        variant="outlined" fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row">
                                                <Grid item xs={4}>
                                                <InputLabel class="LabelForm" htmlFor="LogoAlt">ALT</InputLabel>
                                                <TextField
                                                        required
                                                        id="LogoAlt"
                                                        name="LogoAlt"
                                                        value={values.logo.alt}
                                                        onChange={this.handleInputChange}
                                                        variant="outlined" fullWidth

                                                />
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={3}>
                                                <InputLabel class="LabelForm" htmlFor="LogoOpenInNewTab">OUVRIR DANS NOUVEL ONGLET</InputLabel>
                                                    <GreenSwitch
                                                        id="LogoOpenInNewTab"
                                                        name="LogoOpenInNewTab"
                                                        defaultChecked={values.logo.openInNewTab}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={2}>
                                                <InputLabel class="LabelForm" htmlFor="LogoIsEnable">ACTIVE</InputLabel>
                                                    <GreenSwitch
                                                        id="LogoIsEnable"
                                                        name="LogoIsEnable"
                                                        defaultChecked={values.logo.isEnable}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                            </div>
                                    </Grid>
                                </Grid>
                                <div class="MarketingDiv">
                                    <p class="grayText">PARAMETRAGES DES TEXTES</p>
                                    <Grid container direction="row">
                                        <Grid item xs={7}>
                                            <InputLabel class="LabelForm"
                                                        htmlFor="MarketingText">TEXTE DE L'ACCROCHE MARKETING
                                            </InputLabel>
                                            <TextField
                                                    required
                                                    id="MarketingText"
                                                    name="MarketingText"
                                                    multiline
                                                    rows={4}
                                                    value={values.marketingText.text}
                                                    onChange={this.handleInputChange}
                                                    variant="outlined" fullWidth

                                            />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={1}>
                                            <InputLabel   class="LabelForm" htmlFor="MarketingTextIsEnable">ACTIVE</InputLabel>
                                            <GreenSwitch
                                                    id="MarketingTextIsEnable"
                                                    name="MarketingTextIsEnable"
                                                    defaultChecked={values.marketingText.isEnable}
                                                    onChange={this.handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item xs={3}></Grid>
                                    </Grid>
                                    <Grid container direction="row">
                                        <Grid item xs={4}>
                                            <InputLabel  class="LabelForm"
                                                        htmlFor="SearchButtonText">TEXTE DU BOUTON RECHERCHE
                                            </InputLabel>
                                            <TextField
                                                    required
                                                    id="MarketingText"
                                                    name="MarketingText"
                                                    variant="outlined" 
                                                    style={{
                                                    width:'100%'
                                                    }}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                            
                             </div>
                        }

                        <div class="secionHead">
                            <Button startIcon={<ExpandLessIcon />} 
                                onClick={() => this.hideComponent("showHideSearchManagement")}
                                style = {{fontSize:20, }}
                                >
                             | GESTION DES CRITERES DE RECHERCHE
                            </Button>  
                            
                        </div>

                
                        { showHideSearchManagement && 
                          <div> 
                            <Grid container direction="row">
                                <div class="SearchManagementHead">
                                    <p class="grayText">CHOIX DES GAMMES</p>
                                    <Grid container direction="row">
                                        <Grid item xs={3}>
                                            <InputLabel class="LabelForm" htmlFor="InputGamme">GAMME 1</InputLabel>
                                            <Select
                                                    native
                                                    id="InputGamme"
                                                    name="InputGamme"
                                                    style={{
                                                        borderRadius:5,
                                                        borderStyle:'solid',
                                                        borderColor:'lightgray',
                                                        width:'100%'
                                                    }}
                                                    onChange={this.InputRangeHandler}
                                                    >
                                                    <option aria-label="None" value="" />
                                                    <option value="InputGamme1">InputGamme1</option>
                                                    <option value="InputGamme2">InputGamme2</option>
                                                    <option value="InputGamme3">InputGamme3</option>
                                            </Select>
                                        </Grid>
                                    </Grid>
                                    
                                </div>
                            </Grid>

                            <Grid container direction="row" >
                                <Grid item xs={6}>
                                    <div class="FirstInput">
                                        <p class="grayText">CHAMP DE SAISIE 1</p>
                                        <Grid container direction="row">
                                        <Grid item xs={1}>
                                            <InputLabel class="LabelForm" htmlFor="FirstInputActive">ACTIF</InputLabel>
                                            <GreenSwitch
                                                        id="FirstInputActive"
                                                        name="FirstInputActive"
                                                        defaultChecked='true'
                                                />
                                        </Grid>
                                        <Grid item xs={5}></Grid>
                                        <Grid item xs={3}>
                                            <InputLabel class="LabelForm" htmlFor="FirstInputRequired">CHAMP OBLIGATOIRE</InputLabel>
                                            <GreenSwitch
                                                        id="FirstInputRequired"
                                                        name="FirstInputRequired"
                                                        defaultChecked='true'
                                                />
                                        </Grid>
                                        </Grid>
                                        <Grid container direction="row">
                                        <Grid item xs={4}>
                                            <InputLabel class="LabelForm" htmlFor="FirstInputType">TYPE</InputLabel>
                                            <Select
                                            native
                                            id="FirstInputType"
                                            name="FirstInputType"
                                            style={{
                                                borderRadius:5,
                                                borderStyle:'solid',
                                                borderColor:'lightgray',
                                                width:'100%'
                                            }}
                                            onChange={this.TypeFirstInputHandler}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value="ADRESSE">ADRESSE</option>
                                            <option value="NUMÉRIQUE">NUMÉRIQUE</option>
                                            <option value="TEXTE LIBRE">TEXTE LIBRE</option>
                                            </Select>
                                        </Grid>
                                        </Grid>
                                        <Grid container direction="row">
                                        <Grid item xs={6}>
                                                <InputLabel class="LabelForm" htmlFor="FirstInputPlaceholder">PLACEHOLDER</InputLabel>
                                                <TextField
                                                    required
                                                    id="FirstInputPlaceholder"
                                                    name="FirstInputPlaceholder"
                                                    variant="outlined" fullWidth
                                                />
                                        </Grid>
                                        </Grid>
                                        <Typography variant="subtitle1" class="grayText">PARAMETRE LIE DANS L'URL DE RECHERCHE</Typography>
                                        <Typography variant="subtitle2" class="grayText"> Gamme 1 : {this.state.InputRange}</Typography>
                                        <p variant="subtitle2" class="grayText" style={{
                                            fontSize:'12px',
                                        }}>URI GENERÉ</p>
                                        { !TypeFirstInput &&
                                            <Grid container direction="row">
                                                <Grid item xs={4}>
                                                    <InputLabel class="LabelForm" htmlFor="FirstInputAttribute">Attribute</InputLabel>
                                                        <Select
                                                            native
                                                            id="FirstInputAttribute"
                                                            name="FirstInputAttribute"
                                                            style={{
                                                            borderRadius:5,
                                                            borderStyle:'solid',
                                                            borderColor:'lightgray',
                                                            width:'100%'
                                                            }}
                                                        >
                                                            <option aria-label="None" value="cle1" />
                                                            <option value="ADRESSE">Cle2</option>
                                                            <option value="NUMÉRIQUE">cle3</option>
                                                            <option value="TEXTE LIBRE">cle 4</option>
                                                        </Select>
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={4}>
                                                    <InputLabel class="LabelForm" htmlFor="FirstInputAttributeValue">Variable correspondante</InputLabel>
                                                        <Select
                                                            native
                                                            id="FirstInputType"
                                                            name="FirstInputType"
                                                            style={{
                                                            borderRadius:5,
                                                            borderStyle:'solid',
                                                            borderColor:'lightgray',
                                                            width:'100%'
                                                            }}
                                                        >
                                                            <option aria-label="None" value="cle1" />
                                                            <option value="ADRESSE">Cle2</option>
                                                            <option value="NUMÉRIQUE">cle3</option>
                                                            <option value="TEXTE LIBRE">cle 4</option>
                                                        </Select>
                                                </Grid>
                                                <Grid item xs={1}>
                                                <InputLabel class="LabelForm" htmlFor="DeleteIcon">DELETE</InputLabel>
                                                    <Button  startIcon={<DeleteIcon />} 
                                                        variant="text" 
                                                    ></Button>
                                                </Grid>
                                                <Grid item xs={1}>
                                                <InputLabel class="LabelForm" htmlFor="AddIcon">ADD</InputLabel>
                                                    <Button  startIcon={<AddCircleOutlineIcon />} 
                                                        variant="text" color="primary"
                                                    ></Button>
                                                </Grid>
                                            </Grid>
                                        }
                                        {TypeFirstInput && 
                                             <Grid container direction="row">
                                                <Grid item xs={4}>
                                                    <InputLabel class="LabelForm" htmlFor="FirstInputRangeKey">Cles de la gamme</InputLabel>
                                                    <Select
                                                            native
                                                            id="FirstInputRangeKey"
                                                            name="FirstInputRangeKey"
                                                            style={{
                                                            borderRadius:5,
                                                            borderStyle:'solid',
                                                            borderColor:'lightgray',
                                                            width:'100%'
                                                            }}
                                                        >
                                                            <option aria-label="None" value="cle1" />
                                                            <option value="1">Cle2</option>
                                                            <option value="2">cle3</option>
                                                            <option value="3">cle4</option>
                                                        </Select>
                                                </Grid>
                                             </Grid>
                                        }
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div class="SecondInput">
                                        <p class="grayText">CHAMP DE SAISIE 2</p>
                                        <Grid container direction="row">
                                            <Grid item xs={1}>
                                            <InputLabel class="LabelForm" htmlFor="SecondInputActive">ACTIF</InputLabel>
                                                <GreenSwitch
                                                        id="SecondInputActive"
                                                        name="SecondInputActive"
                                                        defaultChecked='true'
                                                    />
                                            </Grid>
                                            <Grid item xs={5}></Grid>
                                            <Grid item xs={3}>
                                            <InputLabel class="LabelForm" htmlFor="SecondInputRequired">CHAMP OBLIGATOIRE</InputLabel>
                                                <GreenSwitch
                                                        id="SecondInputRequired"
                                                        name="SecondInputRequired"
                                                        defaultChecked='true'
                                                    />
                                            </Grid>
                                        </Grid>
                                        <Grid container direction="row">
                                            <Grid item xs={4}>
                                            <InputLabel class="LabelForm" htmlFor="SecondInputType">TYPE</InputLabel>
                                            <Select
                                                native
                                                id="SecondInputType"
                                                name="SecondInputType"
                                                style={{
                                                borderRadius:5,
                                                borderStyle:'solid',
                                                borderColor:'lightgray',
                                                width:'100%'
                                                }}
                                                onChange={this.TypeSecondInputHandler}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value="ADRESSE">ADRESSE</option>
                                                <option value="NUMÉRIQUE">NUMÉRIQUE</option>
                                                <option value="TEXTE LIBRE">TEXTE LIBRE</option>
                                            </Select>
                                            </Grid>
                                        </Grid>
                                        <Grid container direction="row">
                                            <Grid item xs={6}>
                                                <InputLabel class="LabelForm" htmlFor="SecondInputPlaceholder">PLACEHOLDER</InputLabel>
                                                <TextField
                                                        required
                                                        id="SecondInputPlaceholder"
                                                        name="SecondInputPlaceholder"
                                                        variant="outlined" fullWidth
                                
                                                />
                                            </Grid>
                                        </Grid>
                                        <Typography variant="subtitle1" class="grayText">PARAMETRE LIE DANS L'URL DE RECHERCHE</Typography>
                                        <Typography variant="subtitle2" class="grayText">Gamme 1 : {this.state.InputRange}</Typography>
                                        <p variant="subtitle2" class="grayText" style={{
                                            fontSize:'12px',
                                        }}>URI GENERÉ</p>

                                        { !TypeSecondInput &&
                                            <Grid container direction="row">
                                                <Grid item xs={4}>
                                                    <InputLabel class="LabelForm" htmlFor="SecondInputAttribute">Attribute</InputLabel>
                                                        <Select
                                                            native
                                                            id="SecondInputAttribute"
                                                            name="SecondInputAttribute"
                                                            style={{
                                                            borderRadius:5,
                                                            borderStyle:'solid',
                                                            borderColor:'lightgray',
                                                            width:'100%'
                                                            }}
                                                        >
                                                            <option aria-label="None" value="cle1" />
                                                            <option value="ADRESSE">Cle2</option>
                                                            <option value="NUMÉRIQUE">cle3</option>
                                                            <option value="TEXTE LIBRE">cle 4</option>
                                                        </Select>
                                                </Grid>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={4}>
                                                    <InputLabel class="LabelForm" htmlFor="SecondInputAttributeValue">Variable correspondante</InputLabel>
                                                        <Select
                                                            native
                                                            id="SecondInputType"
                                                            name="SecondInputType"
                                                            style={{
                                                            borderRadius:5,
                                                            borderStyle:'solid',
                                                            borderColor:'lightgray',
                                                            width:'100%'
                                                            }}
                                                        >
                                                            <option aria-label="None" value="cle1" />
                                                            <option value="ADRESSE">Cle2</option>
                                                            <option value="NUMÉRIQUE">cle3</option>
                                                            <option value="TEXTE LIBRE">cle 4</option>
                                                        </Select>
                                                </Grid>
                                                <Grid item xs={1}>
                                                <InputLabel class="LabelForm" htmlFor="DeleteIcon">DELETE</InputLabel>
                                                    <Button  startIcon={<DeleteIcon />} 
                                                        variant="text" 
                                                    ></Button>
                                                </Grid>
                                                <Grid item xs={1}>
                                                <InputLabel class="LabelForm" htmlFor="AddIcon">ADD</InputLabel>
                                                    <Button  startIcon={<AddCircleOutlineIcon />} 
                                                        variant="text" color="primary"
                                                    ></Button>
                                                </Grid>
                                            </Grid>
                                        }
                                        {TypeSecondInput && 
                                             <Grid container direction="row">
                                                <Grid item xs={4}>
                                                    <InputLabel class="LabelForm" htmlFor="SecondInputRangeKey">Cles de la gamme</InputLabel>
                                                    <Select
                                                            native
                                                            id="SecondInputRangeKey"
                                                            name="SecondInputRangeKey"
                                                            style={{
                                                            borderRadius:5,
                                                            borderStyle:'solid',
                                                            borderColor:'lightgray',
                                                            width:'100%'
                                                            }}
                                                        >
                                                            <option aria-label="None" value="cle1" />
                                                            <option value="1">Cle2</option>
                                                            <option value="2">cle3</option>
                                                            <option value="3">cle4</option>
                                                        </Select>
                                                </Grid>
                                             </Grid>
                                        }
                                        </div>
                                </Grid>
                            </Grid>

                        </div>
                         }
                   
               </div>
            </form>
            </Container>
        )
    }
}