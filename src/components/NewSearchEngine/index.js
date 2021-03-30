import React, { Component } from "react";
import { useLocation, withRouter } from "react-router-dom";
import {
  Button,
  Collapse,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import {
  ArrowBackIosRounded as ArrowBackIosRoundedIcon,
  Close as CloseIcon,
  Save as SaveIcon,
  Visibility as VisibilityIcon,
  ExpandLess as ExpandLessIcon,
  Delete as DeleteIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@material-ui/icons";

import Alert from "@material-ui/lab/Alert";

import {
  ButtonBack,
  ButtonStyled,
  DivCenter,
  HeadDiv,
  GeneralInfos,
  GreenSwitch,
  InputLabelStyled,
  LabelStyled,
  MarketingDiv,
  SearchManagementHead,
  SelectStyled,
  PageBody,
  PageTitle,
  PreviewDiv,
} from "./style";

import * as actions from "../../actions/engine";

export class NewSearchEngine extends Component {
  constructor() {
    super();
    this.state = {
      actionsType: "",
      showHideGeneralInfo: true,
      showHideVisualManagement: false,
      showHideSearchManagement: false,
      InputRange: "",
      TypeFirstInput: true,
      TypeSecondInput: true,
      openAlert: false,

      initialValues: {
        Code: "",
        isEnable: false,
        Name: "",
        searchText: "",
        lastUpdate: "",
        scopes: [
          {
            scopeId: 0,
            order: 0,
            name: "",
            isEnable: true,
          },
        ],
        inputFields: [
          {
            inputId: 0,
            isEnable: true,
            isMandatory: true,
            label: "",
            order: 0,
            type: "",
            parameters: [
              {
                scopeParameterId: 0,
                externalCodeId: 0,
                order: 0,
                label: "",
              },
            ],
          },
        ],
        backGroundImages: [
          {
            alt: "",
            isEnable: true,
            openInNewTab: true,
            order: 0,
            urlImageDesktop: "",
            urlLinkDesktop: "",
            urlImageMobile: "",
            urlLinkMobile: "",
          },
        ],
        logo: {
          urlImageDesktop: "",
          urlLinkDesktop: "",
          urlImageMobile: "",
          urlLinkMobile: "",
          alt: "",
          isEnable: true,
          openInNewTab: true,
        },
        marketingText: {
          isEnable: true,
          text: "",
        },
      },

      values: {
        Code: "",
        isEnable: false,
        Name: "",
        searchText: "",
        lastUpdate: "",
        scopes: [
          {
            scopeId: 0,
            order: 0,
            name: "",
            isEnable: true,
          },
        ],
        inputFields: [
          {
            inputId: 0,
            isEnable: true,
            isMandatory: true,
            label: "",
            order: 0,
            type: "",
            parameters: [
              {
                scopeParameterId: 0,
                externalCodeId: 0,
                order: 0,
                label: "",
              },
            ],
          },
        ],
        backGroundImages: [
          {
            alt: "",
            isEnable: true,
            openInNewTab: true,
            order: 0,
            urlImageDesktop: "",
            urlLinkDesktop: "",
            urlImageMobile: "",
            urlLinkMobile: "",
          },
        ],
        logo: {
          urlImageDesktop: "",
          urlLinkDesktop: "",
          urlImageMobile: "",
          urlLinkMobile: "",
          alt: "",
          isEnable: true,
          openInNewTab: true,
        },
        marketingText: {
          isEnable: true,
          text: "",
        },
      },
      engineCodeToUpdate: "",

      errors: {
        name: "",
        code: "",
      },
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.location.state.actionType === "new") {
      this.setState({ actionsType: "new" });
      this.setState({ values: { ...this.state.initialValues } });
    } else {
      this.setState({ actionsType: "update" });
      if (this.props.location.state.engineToUpdate !== undefined) {
        this.setState({
          values: { ...this.props.location.state.engineToUpdate },
        });
        this.setState({
          engineCodeToUpdate: this.props.location.state.engineToUpdate.Code,
        });
      }
    }
    console.log(this.props.location.state);
  }

  InputRangeHandler = (event) => {
    this.setState({ InputRange: event.target.value });
  };

  TypeFirstInputHandler = (event) => {
    if (event.target.value === "ADRESSE")
      this.setState({ TypeFirstInput: false });
    else this.setState({ TypeFirstInput: true });
  };

  TypeSecondInputHandler = (event) => {
    if (event.target.value === "ADRESSE")
      this.setState({ TypeSecondInput: false });
    else this.setState({ TypeSecondInput: true });
  };

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideGeneralInfo":
        this.setState({ showHideGeneralInfo: !this.state.showHideGeneralInfo });
        break;
      case "showHideVisualManagement":
        this.setState({
          showHideVisualManagement: !this.state.showHideVisualManagement,
        });
        break;
      case "showHideSearchManagement":
        this.setState({
          showHideSearchManagement: !this.state.showHideSearchManagement,
        });
        break;
      default:
        this.setState({ showHideGeneralInfo: this.state.showHideGeneralInfo });
    }
  }

  validateName = () => {
    if (this.state.values.name == "") {
      this.setState({
        errors: {
          ...this.state.errors,
          name: "Ce champ est obligatoire!",
        },
      });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          name: "",
        },
      });
    }
  };

  handleInputChange = (event) => {
    switch (event.target.name) {
      case "Name":
        this.validateName();
        this.setState({
          values: {
            ...this.state.values,
            name: event.target.value,
          },
        });
        break;
      case "Code":
        this.setState({
          values: {
            ...this.state.values,
            code: event.target.value,
          },
        });
        break;
      case "isEnable":
        this.setState({
          values: {
            ...this.state.values,
            isEnable: !this.state.values.isEnable,
          },
        });
        break;
      case "LogoUrlImageDesktop":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              urlImageDesktop: event.target.value,
            },
          },
        });
        break;
      case "LogoUrlImageMobile":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              urlImageMobile: event.target.value,
            },
          },
        });
        break;
      case "LogoAlt":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              alt: event.target.value,
            },
          },
        });
        break;
      case "LogoIsEnable":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              isEnable: !this.state.values.logo.isEnable,
            },
          },
        });
        break;
      case "LogoOpenInNewTab":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              openInNewTab: !this.state.values.logo.openInNewTab,
            },
          },
        });
        break;
      case "LogoUrlLinkDesktop":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              urlLinkDesktop: event.target.value,
            },
          },
        });
        break;
      case "LogoUrlLinkMobile":
        this.setState({
          values: {
            ...this.state.values,
            logo: {
              ...this.state.values.logo,
              urlLinkMobile: event.target.value,
            },
          },
        });
        break;
      case "MarketingText":
        this.setState({
          values: {
            ...this.state.values,
            marketingText: {
              ...this.state.values.marketingText,
              text: event.target.value,
            },
          },
        });
        break;
      case "MarketingTextIsEnable":
        this.setState({
          values: {
            ...this.state.values,
            marketingText: {
              ...this.state.values.marketingText,
              isEnable: !this.state.values.marketingText.isEnable,
            },
          },
        });
        break;
      case "SearchButtonText":
        this.setState({
          values: {
            ...this.state.values,
            searchText: event.target.value,
          },
        });
        break;
      default:
        break;
    }
  };

  validate = () => {
    let temp = {};
    temp.name = this.state.values.name ? "" : "Ce champ est obligatoire!";
    temp.code = this.state.values.code ? "" : "Ce champ est obligatoire!";
    this.setState({
      errors: {
        ...temp,
      },
    });
    return Object.values(temp).every((x) => x == "");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.actionsType === "new") {
      actions.create(this.state.values, (message) => {
        window.alert(message);
      });
    } else if (this.state.actionsType === "update") {
      actions.update(
        this.state.engineCodeToUpdate,
        this.state.values,
        (message) => {
          window.alert(message);
        }
      );
    }
    this.setState({ values: { ...this.state.initialValues } });
  };

  render() {
    const {
      showHideGeneralInfo,
      showHideVisualManagement,
      showHideSearchManagement,
      TypeFirstInput,
      TypeSecondInput,
      values,
      errors,
    } = this.state;
    return (
      <Container maxWidth="fluid">
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <HeadDiv>
            <Grid container direction="row" spacing="2">
              <Grid item xs={1}>
                <ButtonBack
                  startIcon={<ArrowBackIosRoundedIcon />}
                  href="/SearchEngines"
                >
                  BACK
                </ButtonBack>
              </Grid>
              <Grid item xs={7}>
                <PageTitle>
                  EDITION D'UN MOTEUR DE RECHERCHE: {this.state.values.name}
                </PageTitle>
              </Grid>
              <Grid item xs={2}>
                <ButtonStyled
                  href="/NewSearchEngine"
                  startIcon={<VisibilityIcon />}
                >
                  PRÉVISUALISER
                </ButtonStyled>
              </Grid>
              <Grid item xs={2}>
                <ButtonStyled
                  href="/NewSearchEngine"
                  startIcon={<SaveIcon />}
                  onClick={this.handleSubmit}
                >
                  ENREGISTRER
                </ButtonStyled>
              </Grid>
            </Grid>
          </HeadDiv>

          <PageBody>
            <div>
              <Button
                startIcon={<ExpandLessIcon />}
                onClick={() => this.hideComponent("showHideGeneralInfo")}
                style={{ fontSize: 20 }}
              >
                | INFORMATIONS GENERALES
              </Button>
            </div>
            {showHideGeneralInfo && (
              <GeneralInfos>
                <LabelStyled>MOTEUR DE RECHERCHE</LabelStyled>
                <Grid container direction="row">
                  <Grid item xs={3}>
                    <InputLabelStyled htmlFor="Name">NOM DU MOTEUR</InputLabelStyled>
                    <TextField
                      required
                      id="Name"
                      name="Name"
                      variant="outlined"
                      fullWidth
                      value={values.Name}
                      onChange={this.handleInputChange}
                      {...(errors.name && {
                        error: true,
                        helperText: errors.name,
                      })}
                    />
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={3}>
                    <InputLabelStyled htmlFor="isEnable">MOTEUR ACTIVE</InputLabelStyled>
                    <GreenSwitch
                      id="isEnable"
                      name="isEnable"
                      defaultChecked={values.isEnable}
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <InputLabelStyled htmlFor="Code">ID MOTEUR</InputLabelStyled>
                    <TextField
                      required
                      id="Code"
                      name="Code"
                      variant="outlined"
                      fullWidth
                      value={values.Code}
                      onChange={this.handleInputChange}
                      {...(errors.code && {
                        error: true,
                        helperText: errors.code,
                      })}
                    />
                  </Grid>
                </Grid>
              </GeneralInfos>
            )}

            <div>
              <Button
                startIcon={<ExpandLessIcon />}
                onClick={() => this.hideComponent("showHideVisualManagement")}
                style={{ fontSize: 20 }}
              >
                | GESTION DU VISUEL
              </Button>
            </div>

            {showHideVisualManagement && (
              <div>
                <Grid container direction="row">
                  <Grid item xs={3}>
                    <PreviewDiv>
                      <Grid item xs={12}>
                        <DivCenter>
                          <LabelStyled> PAERCU PC</LabelStyled>
                        </DivCenter>
                      </Grid>
                      <Grid item xs={12}>
                        <DivCenter>
                          <img
                            class="fit-picture"
                            src={this.state.values.logo.urlImageDesktop}
                            alt={this.state.values.logo.alt}
                          ></img>
                        </DivCenter>
                      </Grid>
                      <Grid item xs={12}>
                        <DivCenter>
                          <LabelStyled> PAERCU MOBILE</LabelStyled>
                        </DivCenter>
                      </Grid>
                      <Grid item xs={12}>
                        <DivCenter>
                          <img
                            class="fit-picture"
                            src={this.state.values.logo.urlImageMobile}
                            alt={this.state.values.logo.alt}
                          ></img>
                        </DivCenter>
                      </Grid>
                    </PreviewDiv>
                  </Grid>
                  <Grid item xs={9}>
                    <PreviewDiv>
                      <Grid container direction="row">
                        <Grid item xs={4}>
                          <InputLabelStyled
                            htmlFor="LogoUrlImageDesktop"
                          >
                            URL IMAGE PC
                          </InputLabelStyled>
                          <TextField
                            required
                            id="LogoUrlImageDesktop"
                            name="LogoUrlImageDesktop"
                            value={values.logo.urlImageDesktop}
                            onChange={this.handleInputChange}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                          <InputLabelStyled
                            htmlFor="LogoUrlLinkDesktop"
                          >
                            LIEN PC
                          </InputLabelStyled>
                          <TextField
                            required
                            id="LogoUrlLinkDesktop"
                            name="LogoUrlLinkDesktop"
                            value={values.logo.urlLinkDesktop}
                            onChange={this.handleInputChange}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={4}>
                          <InputLabelStyled
                            htmlFor="LogoUrlImageMobile"
                          >
                            URL IMAGE MOBILE
                          </InputLabelStyled>
                          <TextField
                            required
                            id="LogoUrlImageMobile"
                            name="LogoUrlImageMobile"
                            value={values.logo.urlImageMobile}
                            onChange={this.handleInputChange}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                          <InputLabelStyled
                            htmlFor="LogoUrlLinkMobile"
                          >
                            LIEN MOBILE
                          </InputLabelStyled>
                          <TextField
                            required
                            id="LogoUrlLinkMobile"
                            name="LogoUrlLinkMobile"
                            value={values.logo.urlLinkMobile}
                            onChange={this.handleInputChange}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={4}>
                          <InputLabelStyled  htmlFor="LogoAlt">
                            ALT
                          </InputLabelStyled>
                          <TextField
                            required
                            id="LogoAlt"
                            name="LogoAlt"
                            value={values.logo.alt}
                            onChange={this.handleInputChange}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                          <InputLabelStyled
                            htmlFor="LogoOpenInNewTab"
                          >
                            OUVRIR DANS NOUVEL ONGLET
                          </InputLabelStyled>
                          <GreenSwitch
                            id="LogoOpenInNewTab"
                            name="LogoOpenInNewTab"
                            defaultChecked={values.logo.openInNewTab}
                            onChange={this.handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <InputLabelStyled htmlFor="LogoIsEnable">
                            ACTIVE
                          </InputLabelStyled>
                          <GreenSwitch
                            id="LogoIsEnable"
                            name="LogoIsEnable"
                            defaultChecked={values.logo.isEnable}
                            onChange={this.handleInputChange}
                          />
                        </Grid>
                      </Grid>
                    </PreviewDiv>
                  </Grid>
                </Grid>
                <MarketingDiv>
                  <LabelStyled>PARAMETRAGES DES TEXTES</LabelStyled>
                  <Grid container direction="row">
                    <Grid item xs={7}>
                      <InputLabelStyled  htmlFor="MarketingText">
                        TEXTE DE L'ACCROCHE MARKETING
                      </InputLabelStyled>
                      <TextField
                        required
                        id="MarketingText"
                        name="MarketingText"
                        multiline
                        rows={4}
                        value={values.marketingText.text}
                        onChange={this.handleInputChange}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}>
                      <InputLabelStyled
                        htmlFor="MarketingTextIsEnable"
                      >
                        ACTIVE
                      </InputLabelStyled>
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
                      <InputLabelStyled  htmlFor="SearchButtonText">
                        TEXTE DU BOUTON RECHERCHE
                      </InputLabelStyled>
                      <TextField
                        required
                        id="SearchButtonText"
                        name="SearchButtonText"
                        value={values.searchText}
                        onChange={this.handleInputChange}
                        variant="outlined"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </MarketingDiv>
              </div>
            )}

            <div>
              <Button
                startIcon={<ExpandLessIcon />}
                onClick={() => this.hideComponent("showHideSearchManagement")}
                style={{ fontSize: 20 }}
              >
                | GESTION DES CRITERES DE RECHERCHE
              </Button>
            </div>

            {showHideSearchManagement && (
              <div>
                <Grid container direction="row">
                  <SearchManagementHead>
                    <LabelStyled>CHOIX DES GAMMES</LabelStyled>
                    <Grid container direction="row">
                      <Grid item xs={3}>
                        <InputLabelStyled htmlFor="InputGamme">
                          GAMME 1
                        </InputLabelStyled>
                        <SelectStyled
                          native
                          id="InputGamme"
                          name="InputGamme"
                          onChange={this.InputRangeHandler}
                        >
                          <option aria-label="None" value="" />
                          <option value="InputGamme1">InputGamme1</option>
                          <option value="InputGamme2">InputGamme2</option>
                          <option value="InputGamme3">InputGamme3</option>
                        </SelectStyled>
                      </Grid>
                    </Grid>
                  </SearchManagementHead>
                </Grid>

                <Grid container direction="row">
                  <Grid item xs={6}>
                    <PreviewDiv>
                      <LabelStyled>CHAMP DE SAISIE 1</LabelStyled>
                      <Grid container direction="row">
                        <Grid item xs={1}>
                          <InputLabelStyled
                            htmlFor="FirstInputActive"
                          >
                            ACTIF
                          </InputLabelStyled>
                          <GreenSwitch
                            id="FirstInputActive"
                            name="FirstInputActive"
                            defaultChecked="true"
                          />
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={3}>
                          <InputLabelStyled
                            htmlFor="FirstInputRequired"
                          >
                            CHAMP OBLIGATOIRE
                          </InputLabelStyled>
                          <GreenSwitch
                            id="FirstInputRequired"
                            name="FirstInputRequired"
                            defaultChecked="true"
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={4}>
                          <InputLabelStyled
                            htmlFor="FirstInputType"
                          >
                            TYPE
                          </InputLabelStyled>
                          <SelectStyled
                            native
                            id="FirstInputType"
                            name="FirstInputType"
                            onChange={this.TypeFirstInputHandler}
                          >
                            <option aria-label="None" value="" />
                            <option value="ADRESSE">ADRESSE</option>
                            <option value="NUMÉRIQUE">NUMÉRIQUE</option>
                            <option value="TEXTE LIBRE">TEXTE LIBRE</option>
                          </SelectStyled>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={6}>
                          <InputLabelStyled
                            htmlFor="FirstInputPlaceholder"
                          >
                            PLACEHOLDER
                          </InputLabelStyled>
                          <TextField
                            required
                            id="FirstInputPlaceholder"
                            name="FirstInputPlaceholder"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <LabelStyled>
                        PARAMETRE LIE DANS L'URL DE RECHERCHE
                      </LabelStyled>
                      <LabelStyled>
                        Gamme 1 : {this.state.InputRange}
                      </LabelStyled>
                      <p
                        class="grayText"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        URI GENERÉ
                      </p>
                      {!TypeFirstInput && (
                        <Grid container direction="row">
                          <Grid item xs={4}>
                            <InputLabelStyled
                              htmlFor="FirstInputAttribute"
                            >
                              Attribute
                            </InputLabelStyled>
                            <SelectStyled
                              native
                              id="FirstInputAttribute"
                              name="FirstInputAttribute"
                            >
                              <option aria-label="None" value="cle1" />
                              <option value="ADRESSE">Cle2</option>
                              <option value="NUMÉRIQUE">cle3</option>
                              <option value="TEXTE LIBRE">cle 4</option>
                            </SelectStyled>
                          </Grid>
                          <Grid item xs={1}></Grid>
                          <Grid item xs={4}>
                            <InputLabelStyled
                              htmlFor="FirstInputAttributeValue"
                            >
                              Variable correspondante
                            </InputLabelStyled>
                            <SelectStyled
                              native
                              id="FirstInputType"
                              name="FirstInputType"
                            >
                              <option aria-label="None" value="cle1" />
                              <option value="ADRESSE">Cle2</option>
                              <option value="NUMÉRIQUE">cle3</option>
                              <option value="TEXTE LIBRE">cle 4</option>
                            </SelectStyled>
                          </Grid>
                          <Grid item xs={1}>
                            <InputLabelStyled  htmlFor="DeleteIcon">
                              DELETE
                            </InputLabelStyled>
                            <Button
                              startIcon={<DeleteIcon />}
                              variant="text"
                            ></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <InputLabelStyled  htmlFor="AddIcon">
                              ADD
                            </InputLabelStyled>
                            <Button
                              startIcon={<AddCircleOutlineIcon />}
                              variant="text"
                              color="primary"
                            ></Button>
                          </Grid>
                        </Grid>
                      )}
                      {TypeFirstInput && (
                        <Grid container direction="row">
                          <Grid item xs={4}>
                            <InputLabelStyled
                              htmlFor="FirstInputRangeKey"
                            >
                              Cles de la gamme
                            </InputLabelStyled>
                            <SelectStyled
                              native
                              id="FirstInputRangeKey"
                              name="FirstInputRangeKey"
                            >
                              <option aria-label="None" value="cle1" />
                              <option value="1">Cle2</option>
                              <option value="2">cle3</option>
                              <option value="3">cle4</option>
                            </SelectStyled>
                          </Grid>
                        </Grid>
                      )}
                    </PreviewDiv>
                  </Grid>
                  <Grid item xs={6}>
                    <PreviewDiv>
                      <LabelStyled>CHAMP DE SAISIE 2</LabelStyled>
                      <Grid container direction="row">
                        <Grid item xs={1}>
                          <InputLabelStyled
                            htmlFor="SecondInputActive"
                          >
                            ACTIF
                          </InputLabelStyled>
                          <GreenSwitch
                            id="SecondInputActive"
                            name="SecondInputActive"
                            defaultChecked="true"
                          />
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={3}>
                          <InputLabelStyled
                            htmlFor="SecondInputRequired"
                          >
                            CHAMP OBLIGATOIRE
                          </InputLabelStyled>
                          <GreenSwitch
                            id="SecondInputRequired"
                            name="SecondInputRequired"
                            defaultChecked="true"
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={4}>
                          <InputLabelStyled
                            htmlFor="SecondInputType"
                          >
                            TYPE
                          </InputLabelStyled>
                          <SelectStyled
                            native
                            id="SecondInputType"
                            name="SecondInputType"
                            onChange={this.TypeSecondInputHandler}
                          >
                            <option aria-label="None" value="" />
                            <option value="ADRESSE">ADRESSE</option>
                            <option value="NUMÉRIQUE">NUMÉRIQUE</option>
                            <option value="TEXTE LIBRE">TEXTE LIBRE</option>
                          </SelectStyled>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={6}>
                          <InputLabelStyled
                            htmlFor="SecondInputPlaceholder"
                          >
                            PLACEHOLDER
                          </InputLabelStyled>
                          <TextField
                            required
                            id="SecondInputPlaceholder"
                            name="SecondInputPlaceholder"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <LabelStyled>
                        PARAMETRE LIE DANS L'URL DE RECHERCHE
                      </LabelStyled>
                      <LabelStyled>
                        Gamme 1 : {this.state.InputRange}
                      </LabelStyled>
                      <p
                        class="grayText"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        URI GENERÉ
                      </p>

                      {!TypeSecondInput && (
                        <Grid container direction="row">
                          <Grid item xs={4}>
                            <InputLabelStyled
                              htmlFor="SecondInputAttribute"
                            >
                              Attribute
                            </InputLabelStyled>
                            <SelectStyled
                              native
                              id="SecondInputAttribute"
                              name="SecondInputAttribute"
                            >
                              <option aria-label="None" value="cle1" />
                              <option value="ADRESSE">Cle2</option>
                              <option value="NUMÉRIQUE">cle3</option>
                              <option value="TEXTE LIBRE">cle 4</option>
                            </SelectStyled>
                          </Grid>
                          <Grid item xs={1}></Grid>
                          <Grid item xs={4}>
                            <InputLabelStyled
                              htmlFor="SecondInputAttributeValue"
                            >
                              Variable correspondante
                            </InputLabelStyled>
                            <SelectStyled
                              native
                              id="SecondInputType"
                              name="SecondInputType"
                            >
                              <option aria-label="None" value="cle1" />
                              <option value="ADRESSE">Cle2</option>
                              <option value="NUMÉRIQUE">cle3</option>
                              <option value="TEXTE LIBRE">cle 4</option>
                            </SelectStyled>
                          </Grid>
                          <Grid item xs={1}>
                            <InputLabelStyled htmlFor="DeleteIcon">
                              DELETE
                            </InputLabelStyled>
                            <Button
                              startIcon={<DeleteIcon />}
                              variant="text"
                            ></Button>
                          </Grid>
                          <Grid item xs={1}>
                            <InputLabelStyled  htmlFor="AddIcon">
                              ADD
                            </InputLabelStyled>
                            <Button
                              startIcon={<AddCircleOutlineIcon />}
                              variant="text"
                              color="primary"
                            ></Button>
                          </Grid>
                        </Grid>
                      )}
                      {TypeSecondInput && (
                        <Grid container direction="row">
                          <Grid item xs={4}>
                            <InputLabelStyled
                              htmlFor="SecondInputRangeKey"
                            >
                              Cles de la gamme
                            </InputLabelStyled>
                            <SelectStyled
                              native
                              id="SecondInputRangeKey"
                              name="SecondInputRangeKey"
                            >
                              <option aria-label="None" value="cle1" />
                              <option value="1">Cle2</option>
                              <option value="2">cle3</option>
                              <option value="3">cle4</option>
                            </SelectStyled>
                          </Grid>
                        </Grid>
                      )}
                    </PreviewDiv>
                  </Grid>
                </Grid>
              </div>
            )}
          </PageBody>
        </form>
      </Container>
    );
  }
}

export default withRouter(NewSearchEngine);
