import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#576CBC'
    },
    secondary: {
      main: '#19376D'
    },
    error: {
      main: '#ED2B2A'
    }
  },
  typography: {
    allVariants: {
      color: '#000'
    },
    body1: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#fff'
    },
    body2: {
      fontSize: '15px',
      fontWeight: 500
    },
    subtitle1: {
      color: '#576CBC',
      fontSize: '15px',
      fontWeight: 500
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#000'
    },
    caption: {
      color: '#ED2B2A',
      fontSize: '12px',
      fontWeight: 500
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-input': {
            fontSize: '15px',
            fontWeight: 500,
            width: '100%',
            height: '44px',
            padding: 0
          },
          '& .css-1mccynf-MuiInputBase-root-MuiOutlinedInput-root': {
            paddingRight: 0
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#576CBC'
          },
          '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#576CBC'
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
            borderWidth: '1px'
          },
          '& .MuiInputLabel-root': {
            marginTop: '-6px'
          },
          '& .MuiInputLabel-root.Mui-focused': {
            borderWidth: '1px'
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              color: '#576CBC',
              borderWidth: '1px'
            }
        }
      },
      defaultProps: {
        inputProps: {
          style: {
            paddingLeft: '20px'
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...((ownerState.variant === 'primary' && {
            '&:hover': {
              backgroundColor: '#576CBC',
              color: '#fff'
            },
            '&:focus': {
              border: '0px'
            },
            '&:active': {
              backgroundColor: '#576CBC'
            }
          }) ||
            (ownerState.color === 'secondary' && {
              '&:hover': {
                backgroundColor: '#19358A'
              },
              '&:focus': {
                /* border: '6px solid #F0EEEE', */
                backgroundColor: '#19376D'
              },
              '&:active': {
                backgroundColor: '#263238'
              }
            }) ||
            (ownerState.color === 'info' && {
              color: '#576CBC !important',
              '&:hover': {
                color: '#000'
              },
              '&:focus': {
                border: '0px'
              }
            })),
          textTransform: 'none',
          disabled: {
            color: '#C8CDD2',
            backgroundColor: '#F8F9FA'
          }
        })
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          height: '34px',
          paddingLeft: '20px',
          paddingTop: '10px'
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginTop: '13px',
          height: '381px',
          '*::-webkit-scrollbar': {
            width: '3px'
          },
          '*::-webkit-scrollbar-track': {
            marginTop: '8px',
            marginBottom: '8px'
          },

          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#576CBC',
            borderRadius: '10px',
            height: '50px'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '44px'
        }
      }
    }
  }
})

export default theme
